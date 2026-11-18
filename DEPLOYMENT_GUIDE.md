# Scale and Spaces Private Limited - Website & Deployment Guide

This project contains the complete, production-ready website for **Scale and Spaces Private Limited** (Architecture, Engineering, Interior Design & Turnkey Construction), featuring all **58 real projects** extracted from your official company portfolio, **9 verified team member profiles**, interactive **Instant BOQ Cost Estimators**, **Engineering & NBC 205 Hub**, **Live Nepal Material Rates**, and **WhatsApp Booking Integration**.

---

## 📁 Project Locations on Your PC

1. **Development & Active Workspace:**
   `C:\Users\maste\.gemini\antigravity\scratch\scale-and-spaces-website`
   *(Pre-initialized Git repository with all compressed assets, dependencies, and Vite build configuration)*

2. **Desktop Shortcut Folder:**
   `C:\Users\maste\Desktop\Website\Scale-and-Spaces-Website`
   *(Quick access on your Desktop with standalone single-file index and compressed asset folders)*

---

## 🚀 How to Test Locally Right Now (Zero Setup)

You can view the website immediately without running any server:

1. Open your File Explorer and go to:
   `C:\Users\maste\Desktop\Website\Scale-and-Spaces-Website`
2. **Double-click `standalone_index.html`** (or right-click → Open with Google Chrome / Microsoft Edge).
3. The site opens instantly with:
   - Verified vector SVG logo and crisp branding
   - 58 projects with category filtering (`All`, `Commercial`, `Residential`, `Interior`, `Landscape`, `Institutional`, `Religious`, `Branding`)
   - Interactive Lightbox with full project details, locations, years, clients, and WhatsApp inquiry buttons
   - 10+ Interactive Engineering & BOQ calculators (Paint, False Ceiling, Lighting Lux, Modular Kitchen Rft, AC Tonnage, Plinth Area, Brick Wall count, RCC Cement Bags, Stirrup Rebar, NBC 205 Seismic PGA, Ductile Detailing)
   - Real team profiles with photos (Er. Chetan Kr. Sarraf, Ar. Supriya Thapa, Ar. Yateendra K Labh, Er. Sunil Chaurasiya, etc.)

---

## 🌐 How to Host on GitHub Pages (Step-by-Step)

You have two simple ways to host this on GitHub Pages:

### Method 1: Using GitHub Desktop (Easiest & Visual)

1. Open **GitHub Desktop** on your computer (`C:\Users\maste\AppData\Local\GitHubDesktop\GitHubDesktop.exe`).
2. Click **File → Add Local Repository** (or press `Ctrl + O`).
3. Choose the folder:
   `C:\Users\maste\.gemini\antigravity\scratch\scale-and-spaces-website`
4. Click **Add Repository**.
5. Click the blue **Publish repository** button at the top.
   - Name: `scale-and-spaces-website` (or any repository name you like)
   - Uncheck "Keep this code private" if you want free GitHub Pages hosting.
   - Click **Publish Repository**.
6. Once published, go to your repository on **GitHub.com**:
   - Go to **Settings** (top tab) → **Pages** (left sidebar).
   - Under **Build and deployment > Source**, select: **`GitHub Actions`**.
   - GitHub will automatically run the included workflow (`.github/workflows/deploy.yml`), build the production bundle, and publish your live website!

### Method 2: Command Line (PowerShell)

Run these commands in PowerShell:

```powershell
$git = "C:\Users\maste\AppData\Local\GitHubDesktop\app-3.6.10\resources\app\git\cmd\git.exe"
cd "C:\Users\maste\.gemini\antigravity\scratch\scale-and-spaces-website"

# Link your remote repository (replace YOUR_USERNAME and REPO_NAME)
& $git remote add origin https://github.com/YOUR_USERNAME/scale-and-spaces-website.git

# Push to main branch
& $git push -u origin main
```

Then go to **Settings > Pages > Source > GitHub Actions**.

---

## 🏷️ Setting Up Your Custom Domain (e.g. `www.scaleandspaces.com`)

When you purchase your domain name later:

1. **In GitHub:**
   - In your GitHub repo, go to **Settings → Pages**.
   - In the **Custom domain** box, enter: `www.scaleandspaces.com` (or your domain).
   - Click **Save**.
   - Check the **Enforce HTTPS** box.

2. **In Your Domain Registrar (Namecheap, GoDaddy, Cloudflare, etc.):**
   Add these DNS records:

   | Type | Name / Host | Target / Value | Purpose |
   | :--- | :--- | :--- | :--- |
   | **A** | `@` | `185.199.108.153` | GitHub Pages IP 1 |
   | **A** | `@` | `185.199.109.153` | GitHub Pages IP 2 |
   | **A** | `@` | `185.199.110.153` | GitHub Pages IP 3 |
   | **A** | `@` | `185.199.111.153` | GitHub Pages IP 4 |
   | **CNAME** | `www` | `YOUR_USERNAME.github.io` | Points www to GitHub |

DNS propagation usually takes 5 to 30 minutes, after which your site will be live securely with automatic SSL!

---

## 🖼️ Asset Compression & Organization Summary

All assets have been extracted, optimized, and compressed using 82% bicubic JPEG compression to balance ultra-sharp rendering with microscopic load times:

| Asset Directory | Contents | Average Size |
| :--- | :--- | :--- |
| `assets/logo.svg` / `logo.jpg` | Official Scale & Spaces vector SVG & high-res raster mark | ~2 KB / 25 KB |
| `assets/projects/` | 58 verified architectural projects across Nepal | ~110 KB / image (8.1 MB total) |
| `assets/team/` | 9 team members extracted from portfolio | ~8 KB / photo (76 KB total) |
| `assets/marketing/` | 7 promotional & festival graphics | ~90 KB / image |

---

## 📞 Business Contacts Configured in Site

- **Head Office:** Tokha-6, Dhapasi, Kathmandu, Nepal
- **Regional Contact Office:** Birgunj-12, Parsa, Nepal (Opposite Indian Embassy)
- **Phone / WhatsApp:** `+977 9703881733`
- **Email:** `studio@scaleandspaces.com`
- **Lead Contact:** Er. Chetan Kr. Sarraf (Director & Interior Designer / Civil Engineer)
