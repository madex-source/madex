Add-Type -AssemblyName System.Drawing

$srcDir = "C:\Users\maste\Downloads\Scale and Spaces website"
$heronVendor = "D:\New folder\heron-ai-clone\vendor"

$destBases = @(
  "C:\Users\maste\.gemini\antigravity\scratch\madex-repo",
  "C:\Users\maste\Desktop\Website\Scale-and-Spaces-Website",
  "C:\Users\maste\.gemini\antigravity\scratch\scale-and-spaces-website"
)

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]84)

function Resize-Jpeg {
  param([string]$srcPath, [string]$dstPath, [int]$maxWidth = 1280)
  if (-not (Test-Path $srcPath)) {
    Write-Warning "Missing source: $srcPath"
    return
  }
  $img = [System.Drawing.Image]::FromFile($srcPath)
  try {
    $w = $img.Width
    $h = $img.Height
    if ($w -gt $maxWidth) {
      $newW = $maxWidth
      $newH = [int][Math]::Round($h * ($maxWidth / [double]$w))
    } else {
      $newW = $w
      $newH = $h
    }
    $bmp = New-Object System.Drawing.Bitmap($newW, $newH)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($img, 0, 0, $newW, $newH)
    $g.Dispose()
    $bmp.Save($dstPath, $jpegCodec, $encParams)
    $bmp.Dispose()
  } finally {
    $img.Dispose()
  }
}

function Process-TeamPortrait {
  param([string]$srcPath, [string]$dstPath)
  if (-not (Test-Path $srcPath)) { return }
  $srcImg = [System.Drawing.Bitmap]::FromFile($srcPath)
  try {
    $w = $srcImg.Width
    $h = $srcImg.Height
    # Clone into writable 32bppArgb bitmap
    $bmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g0 = [System.Drawing.Graphics]::FromImage($bmp)
    $g0.DrawImage($srcImg, 0, 0, $w, $h)
    $g0.Dispose()

    # BFS flood fill pure black background from all 4 outer borders -> warm studio tone rgb(242, 240, 235)
    $visited = New-Object 'bool[,]' $w, $h
    $queue = New-Object 'System.Collections.Generic.Queue[int]'
    $targetColor = [System.Drawing.Color]::FromArgb(255, 242, 240, 235)

    for ($x = 0; $x -lt $w; $x++) {
      $queue.Enqueue($x)
      $queue.Enqueue(($h - 1) * $w + $x)
    }
    for ($y = 1; $y -lt ($h - 1); $y++) {
      $queue.Enqueue($y * $w)
      $queue.Enqueue($y * $w + ($w - 1))
    }

    while ($queue.Count -gt 0) {
      $idx = $queue.Dequeue()
      $cx = $idx % $w
      $cy = [int][Math]::Floor($idx / $w)
      if ($cx -lt 0 -or $cx -ge $w -or $cy -lt 0 -or $cy -ge $h) { continue }
      if ($visited[$cx, $cy]) { continue }
      $visited[$cx, $cy] = $true

      $c = $bmp.GetPixel($cx, $cy)
      # Strict threshold <= 7 only touches pure PDF-alpha void, never suit lapels/sleeves
      if ($c.R -le 7 -and $c.G -le 7 -and $c.B -le 7) {
        $bmp.SetPixel($cx, $cy, $targetColor)
        if ($cx -gt 0 -and -not $visited[($cx - 1), $cy]) { $queue.Enqueue($cy * $w + ($cx - 1)) }
        if ($cx -lt ($w - 1) -and -not $visited[($cx + 1), $cy]) { $queue.Enqueue($cy * $w + ($cx + 1)) }
        if ($cy -gt 0 -and -not $visited[$cx, ($cy - 1)]) { $queue.Enqueue(($cy - 1) * $w + $cx) }
        if ($cy -lt ($h - 1) -and -not $visited[$cx, ($cy + 1)]) { $queue.Enqueue(($cy + 1) * $w + $cx) }
      }
    }

    # Soften 1px seam next to dark cutout pixels
    for ($y = 1; $y -lt ($h - 1); $y++) {
      for ($x = 1; $x -lt ($w - 1); $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.ToArgb() -ne $targetColor.ToArgb()) {
          $adjBg = ($bmp.GetPixel($x - 1, $y).ToArgb() -eq $targetColor.ToArgb()) -or
                   ($bmp.GetPixel($x + 1, $y).ToArgb() -eq $targetColor.ToArgb()) -or
                   ($bmp.GetPixel($x, $y - 1).ToArgb() -eq $targetColor.ToArgb()) -or
                   ($bmp.GetPixel($x, $y + 1).ToArgb() -eq $targetColor.ToArgb())
          if ($adjBg -and $c.R -lt 85) {
            # Blend 50% toward paper tone for smooth studio silhouette
            $r = [int](($c.R + $targetColor.R) / 2)
            $gV = [int](($c.G + $targetColor.G) / 2)
            $b = [int](($c.B + $targetColor.B) / 2)
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $r, $gV, $b))
          }
        }
      }
    }

    # Center onto uniform 400x400 warm stone portrait card (trim 2px outer border noise)
    $out = New-Object System.Drawing.Bitmap(400, 400)
    $g = [System.Drawing.Graphics]::FromImage($out)
    $g.Clear($targetColor)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $scale = [Math]::Min(380.0 / ($w - 4), 380.0 / ($h - 4))
    $dw = [int][Math]::Round(($w - 4) * $scale)
    $dh = [int][Math]::Round(($h - 4) * $scale)
    $dx = [int][Math]::Round((400 - $dw) / 2.0)
    $dy = [int](400 - $dh)
    $srcRect = New-Object System.Drawing.Rectangle(2, 2, ($w - 4), ($h - 4))
    $dstRect = New-Object System.Drawing.Rectangle($dx, $dy, $dw, $dh)
    $g.DrawImage($bmp, $dstRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $out.Save($dstPath, $jpegCodec, $encParams)
    $out.Dispose()
    $bmp.Dispose()
  } finally {
    $srcImg.Dispose()
  }
}

function Invert-Diagram {
  param([string]$srcPath, [string]$dstPath)
  if (-not (Test-Path $srcPath)) { return }
  $srcImg = [System.Drawing.Bitmap]::FromFile($srcPath)
  try {
    $w = $srcImg.Width
    $h = $srcImg.Height
    $out = New-Object System.Drawing.Bitmap($w, $h)
    for ($y = 0; $y -lt $h; $y++) {
      for ($x = 0; $x -lt $w; $x++) {
        $c = $srcImg.GetPixel($x, $y)
        # Convert black background -> warm cream #F7F6F2, white line strokes -> dark ink #111111
        $inv = 255 - [int]$c.R
        $r = [int][Math]::Min(247, $inv)
        $gVal = [int][Math]::Min(246, $inv)
        $b = [int][Math]::Min(242, $inv)
        $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $r, $gVal, $b))
      }
    }
    $out.Save($dstPath, $jpegCodec, $encParams)
    $out.Dispose()
  } finally {
    $srcImg.Dispose()
  }
}

# Build into a single clean staging temp folder first, then mirror across all 3 destinations
$stageDir = Join-Path $env:TEMP "sas_assets_stage"
if (Test-Path $stageDir) { Remove-Item -Recurse -Force $stageDir }
New-Item -ItemType Directory -Path "$stageDir\assets\projects" -Force | Out-Null
New-Item -ItemType Directory -Path "$stageDir\assets\team" -Force | Out-Null
New-Item -ItemType Directory -Path "$stageDir\assets\logos" -Force | Out-Null
New-Item -ItemType Directory -Path "$stageDir\vendor" -Force | Out-Null

# Exact 1-to-1 Project Mapping from portfolio_67fe3a57.pdf (Pages 1-70)
$projectMap = @{
  "cover_studio_tower.jpg"            = "portfolio_Page2_Image1.jpg"
  "mithila_tower.jpg"                 = "portfolio_Page6_Image1.jpg"
  "hyatt_hospital_1.jpg"              = "portfolio_Page7_Image1.jpg"
  "hyatt_hospital_2.jpg"              = "portfolio_Page8_Image1.jpg"
  "aashiq_ansari_commercial.jpg"      = "portfolio_Page9_Image1.jpg"
  "umashankar_commercial.jpg"         = "portfolio_Page10_Image1.jpg"
  "anand_chaudhary_commercial.jpg"    = "portfolio_Page11_Image1.jpg"
  "kamlesh_agrawal_commercial.jpg"    = "portfolio_Page12_Image1.jpg"
  "byd_showroom_1.jpg"                = "portfolio_Page13_Image1.jpg"
  "byd_showroom_2.jpg"                = "portfolio_Page14_Image1.jpg"
  "adarsh_city_center_1.jpg"          = "portfolio_Page15_Image1.jpg"
  "adarsh_city_center_2.jpg"          = "portfolio_Page16_Image1.jpg"
  "shavdaahgriham_pavilion.jpg"       = "portfolio_Page18_Image1.jpg"
  "shavdaahgriham_ranighat_1.jpg"     = "portfolio_Page18_Image2.jpg"
  "shavdaahgriham_roof.jpg"           = "portfolio_Page18_Image3.jpg"
  "shavdaahgriham_crematorium.jpg"    = "portfolio_Page19_Image1.jpg"
  "recreational_mato_park_1.jpg"      = "portfolio_Page20_Image1.jpg"
  "recreational_mato_park_2.jpg"      = "portfolio_Page21_Image1.jpg"
  "recreational_mato_park_3.jpg"      = "portfolio_Page21_Image2.jpg"
  "recreational_mato_park_4.jpg"      = "portfolio_Page21_Image7.jpg"
  "recreational_mato_park_5.jpg"      = "portfolio_Page21_Image8.jpg"
  "iro_birgunj_landscape.jpg"         = "portfolio_Page22_Image1.jpg"
  "tulsi_gupta_residence_1.jpg"       = "portfolio_Page24_Image1.jpg"
  "tulsi_gupta_residence_2.jpg"       = "portfolio_Page25_Image1.jpg"
  "shahid_alam_residence.jpg"         = "portfolio_Page26_Image1.jpg"
  "rohan_yadav_residence.jpg"         = "portfolio_Page27_Image1.jpg"
  "sumit_singh_residence.jpg"         = "portfolio_Page28_Image1.jpg"
  "ashok_shah_residence.jpg"          = "portfolio_Page29_Image1.jpg"
  "rajeshwar_tiwari_residence.jpg"    = "portfolio_Page30_Image1.jpg"
  "tikaram_dhakal_residence.jpg"      = "portfolio_Page31_Image1.jpg"
  "samir_ojha_residence.jpg"          = "portfolio_Page32_Image1.jpg"
  "prakash_amatya_residence.jpg"      = "portfolio_Page33_Image1.jpg"
  "yagya_raj_upreti_residence.jpg"    = "portfolio_Page34_Image1.jpg"
  "bidur_khatiwada_residence.jpg"     = "portfolio_Page35_Image1.jpg"
  "uma_shah_residence.jpg"            = "portfolio_Page36_Image1.jpg"
  "laxmi_poudel_residence.jpg"        = "portfolio_Page37_Image1.jpg"
  "narayan_baral_residence.jpg"       = "portfolio_Page38_Image1.jpg"
  "bhim_baral_residence.jpg"          = "portfolio_Page39_Image1.jpg"
  "chiran_khatiwada_residence.jpg"    = "portfolio_Page40_Image1.jpg"
  "jagdish_mahato_residence.jpg"      = "portfolio_Page41_Image1.jpg"
  "birgunj_customs_apartment.jpg"     = "portfolio_Page43_Image1.jpg"
  "alpine_high_school.jpg"            = "portfolio_Page44_Image1.jpg"
  "aria_institute.jpg"                = "portfolio_Page45_Image1.jpg"
  "standards_metrology_hetauda.jpg"   = "portfolio_Page46_Image1.jpg"
  "arun_rural_municipality_1.jpg"     = "portfolio_Page47_Image1.jpg"
  "arun_rural_municipality_2.jpg"     = "portfolio_Page48_Image1.jpg"
  "blood_transfusion_center.jpg"      = "portfolio_Page49_Image1.jpg"
  "himalaya_kiran_campus.jpg"         = "portfolio_Page50_Image1.jpg"
  "animal_quarantine_jhapa.jpg"       = "portfolio_Page51_Image1.jpg"
  "isckon_temple_birgunj.jpg"         = "portfolio_Page53_Image1.jpg"
  "kalikamai_temple_complex.jpg"      = "portfolio_Page54_Image1.jpg"
  "arun_adhyatmik_temple.jpg"         = "portfolio_Page55_Image1.jpg"
  "interior_bidur_khatiwada_1.jpg"    = "portfolio_Page57_Image1.jpg"
  "interior_bidur_khatiwada_2.jpg"    = "portfolio_Page58_Image1.jpg"
  "interior_bidur_khatiwada_kitchen.jpg" = "portfolio_Page59_Image1.jpg"
  "interior_narayan_baral_1.jpg"      = "portfolio_Page60_Image1.jpg"
  "interior_narayan_baral_bedroom.jpg"= "portfolio_Page61_Image1.jpg"
  "interior_narayan_baral_dining.jpg" = "portfolio_Page62_Image1.jpg"
  "interior_nitesh_singh_master.jpg"  = "portfolio_Page63_Image1.jpg"
  "interior_nitesh_singh_bed2.jpg"    = "portfolio_Page64_Image1.jpg"
  "interior_nitesh_singh_tv.jpg"      = "portfolio_Page65_Image1.jpg"
  "interior_nitesh_singh_living.jpg"  = "portfolio_Page66_Image1.jpg"
  "interior_nitesh_singh_dining.jpg"  = "portfolio_Page67_Image1.jpg"
  "interior_nitesh_singh_study.jpg"   = "portfolio_Page68_Image1.jpg"
  "interior_modern_luxury_living.jpg" = "Modern Luxuary Living room_Project1.jpg"
  "logo_competition_winner.jpg"       = "portfolio_Page70_Image1.jpg"
  "logo_competition_sheet2.jpg"       = "portfolio_Page70_Image2.jpg"
}

Write-Output "Processing $($projectMap.Count) project images..."
foreach ($kv in $projectMap.GetEnumerator()) {
  Resize-Jpeg -srcPath (Join-Path $srcDir $kv.Value) -dstPath (Join-Path "$stageDir\assets\projects" $kv.Key) -maxWidth 1280
}

Write-Output "Inverting tent form concept sketch..."
Invert-Diagram -srcPath (Join-Path $srcDir "portfolio_Page19_Image2.jpg") -dstPath "$stageDir\assets\projects\tent_form_diagram.jpg"

# Exact Team Mapping from Page 3 portraits
$teamMap = @{
  "team-sheetal.jpg"   = "portfolio_Page3_Image1.jpg"
  "team-supriya.jpg"   = "portfolio_Page3_Image2.jpg"
  "team-megnath.jpg"   = "portfolio_Page3_Image3.jpg"
  "team-yateendra.jpg" = "portfolio_Page3_Image4.jpg"
  "team-sunil.jpg"     = "portfolio_Page3_Image5.jpg"
  "team-chetan.jpg"    = "portfolio_Page3_Image6.jpg"
  "team-bishal.jpg"    = "portfolio_Page3_Image7.jpg"
  "team-rohan.jpg"     = "portfolio_Page3_Image8.jpg"
  "team-wasim.jpg"     = "portfolio_Page3_Image9.jpg"
  "team-ashmin.jpg"    = "portfolio_Page3_Image10.jpg"
}

Write-Output "Processing all 10 team portraits..."
foreach ($kv in $teamMap.GetEnumerator()) {
  Process-TeamPortrait -srcPath (Join-Path $srcDir $kv.Value) -dstPath (Join-Path "$stageDir\assets\team" $kv.Key)
}

# Copy Page 69 Client Logos
Write-Output "Copying portfolio Page 69 logo marks..."
for ($i = 1; $i -le 10; $i++) {
  $f = "portfolio_Page69_Image$i.jpg"
  if (Test-Path (Join-Path $srcDir $f)) {
    Copy-Item (Join-Path $srcDir $f) "$stageDir\assets\logos\client-logo-$i.jpg" -Force
  }
}

# Copy GSAP + Lenis + Swiper vendor motion scripts from heron-ai-clone
$vendorFiles = @('gsap.min.js','ScrollTrigger.min.js','SplitText.min.js','lenis.min.js','swiper-bundle.min.js')
foreach ($vf in $vendorFiles) {
  Copy-Item (Join-Path $heronVendor $vf) (Join-Path "$stageDir\vendor" $vf) -Force
}

# Deploy cleanly to root + public of all 3 workspace directories
foreach ($dest in $destBases) {
  if (Test-Path $dest) {
    Copy-Item "$stageDir\assets\projects\*" "$dest\assets\projects\" -Force
    Copy-Item "$stageDir\assets\team\*" "$dest\assets\team\" -Force
    New-Item -ItemType Directory -Path "$dest\assets\logos" -Force | Out-Null
    Copy-Item "$stageDir\assets\logos\*" "$dest\assets\logos\" -Force
    New-Item -ItemType Directory -Path "$dest\vendor" -Force | Out-Null
    Copy-Item "$stageDir\vendor\*" "$dest\vendor\" -Force

    if (Test-Path "$dest\public\assets") {
      Copy-Item "$stageDir\assets\projects\*" "$dest\public\assets\projects\" -Force
      Copy-Item "$stageDir\assets\team\*" "$dest\public\assets\team\" -Force
      New-Item -ItemType Directory -Path "$dest\public\assets\logos" -Force | Out-Null
      Copy-Item "$stageDir\assets\logos\*" "$dest\public\assets\logos\" -Force
      New-Item -ItemType Directory -Path "$dest\public\vendor" -Force | Out-Null
      Copy-Item "$stageDir\vendor\*" "$dest\public\vendor\" -Force
    }
    Write-Output "Synced accurately to: $dest"
  }
}

Remove-Item -Recurse -Force $stageDir
Write-Output "Asset sync complete!"
