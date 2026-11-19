/**
 * Scale and Spaces Pvt. Ltd. — Private Google Sheet Real-Time Web App Bridge
 * Keeps spreadsheet 1ITHet6vFTLALr3u01Db-GGPRh1sAzdtuiGR1fvJruts strictly Private (Restricted),
 * while serving live read-only JSON/JSONP to https://scaleandspaces.com.np & local HTML previews.
 *
 * Deploy steps (once):
 * 1. Open script.google.com (or Extensions -> Apps Script inside the Google Sheet).
 * 2. Paste this entire file into Code.gs and save.
 * 3. Deploy -> New deployment -> Web app:
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the Web app URL (ends with /exec) into cms-config.json ("appsScriptUrl") or pass ?exec=URL.
 */
var TARGET_SPREADSHEET_ID = '1ITHet6vFTLALr3u01Db-GGPRh1sAzdtuiGR1fvJruts';

function doGet(e) {
  var ss = null;
  try {
    ss = SpreadsheetApp.getActiveSpreadsheet();
  } catch (err) {}
  if (!ss) {
    ss = SpreadsheetApp.openById(TARGET_SPREADSHEET_ID);
  }

  var tabs = ['Settings', 'Hero', 'About', 'Services', 'Projects', 'Team', 'Articles', 'Reviews', 'FAQs', 'Partners'];
  var kvTabs = { Settings: true, Hero: true, About: true };
  var out = {};
  var sheetMap = {};
  ss.getSheets().forEach(function(sh) {
    sheetMap[sh.getName()] = sh;
  });

  tabs.forEach(function(name) {
    var sh = sheetMap[name];
    if (!sh) {
      out[name] = [];
      return;
    }
    var range = sh.getDataRange();
    var vals = range.getDisplayValues();
    if (!vals || !vals.length) {
      out[name] = [];
      return;
    }

    var richRows = null;
    try {
      richRows = range.getRichTextValues();
    } catch (rtErr) {}

    function cellTextOrLink(rIdx, cIdx) {
      var v = String(vals[rIdx][cIdx] || '').trim();
      if (richRows && richRows[rIdx] && richRows[rIdx][cIdx]) {
        var rLink = '';
        try { rLink = richRows[rIdx][cIdx].getLinkUrl() || ''; } catch (e2) {}
        if (rLink && (!v || !/^(https?:|mailto:|tel:|#|\?)/i.test(v))) {
          return String(rLink).trim();
        }
      }
      return v;
    }

    if (kvTabs[name]) {
      var kvRows = [];
      for (var i = 0; i < vals.length; i++) {
        var k = String(vals[i][0] || '').trim();
        var v = cellTextOrLink(i, 1);
        if (!k) continue;
        if (i === 0 && /^(key|field|setting)$/i.test(k) && /^(value|val|content)$/i.test(v)) continue;
        kvRows.push({ Key: k, Value: v });
      }
      out[name] = kvRows;
    } else {
      var headers = vals[0].map(function(h, idx) {
        return String(h || ('col' + idx)).replace(/^\uFEFF/, '').trim();
      });
      var rows = [];
      for (var r = 1; r < vals.length; r++) {
        var obj = {};
        var hasVal = false;
        for (var c = 0; c < headers.length; c++) {
          var hName = headers[c];
          var cellVal = cellTextOrLink(r, c);
          if (cellVal !== '') hasVal = true;
          if (hName) obj[hName] = cellVal;
        }
        if (hasVal) rows.push(obj);
      }
      out[name] = rows;
    }
  });

  var payload = JSON.stringify({
    status: 'ok',
    updatedAt: new Date().toISOString(),
    tabs: out
  });

  var cb = e && e.parameter && e.parameter.callback
    ? String(e.parameter.callback).replace(/[^a-zA-Z0-9_.$]/g, '')
    : '';
  if (cb) {
    return ContentService
      .createTextOutput(cb + '(' + payload + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService
    .createTextOutput(payload)
    .setMimeType(ContentService.MimeType.JSON);
}
