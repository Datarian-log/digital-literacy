/**
 * Google Apps Script — Digital Literacy Assessment
 *
 * HOW TO DEPLOY:
 * 1. Go to https://script.google.com and create a new project
 * 2. Paste this entire file into the script editor
 * 3. Click Deploy > New deployment
 * 4. Select type: "Web app"
 * 5. Set "Execute as": Me
 * 6. Set "Who has access": Anyone
 * 7. Click Deploy and copy the URL
 * 8. Create a .env file in your project root with:
 *    VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_ID/exec
 *
 * The script will automatically create two sheets:
 *   - "Results" — assessment scores
 *   - "Survey"  — workshop interest responses
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    if (data.type === 'result') {
      writeResult(ss, data);
    } else if (data.type === 'survey') {
      writeSurvey(ss, data);
    }

    return ContentService.createTextOutput(
      JSON.stringify({ status: 'ok' })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: err.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet(ss, name, headers) {
  var sheet = SpreadsheetApp.openById("1SSq0luYOUrhF0oeh8ObT-fe_k3UgC8YeNbyL7iurKQc");;
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  }
  return sheet;
}

function writeResult(ss, data) {
  var headers = [
    'Timestamp',
    'Student Level',
    'Overall %',
    'Overall Level',
    'Info Search %',
    'Info Search Level',
    'AI Literacy %',
    'AI Literacy Level',
    'Data Literacy %',
    'Data Literacy Level',
    'Academic Info %',
    'Academic Info Level',
  ];

  var sheet = getOrCreateSheet(ss, 'Results', headers);

  var domains = data.domains || {};
  var get = function (label) {
    return domains[label] || { percentage: '', level: '' };
  };

  var is = get('Information Search & Evaluation');
  var ai = get('AI Literacy');
  var dl = get('Data Literacy');
  var ac = get('Academic Information Use');

  sheet.appendRow([
    data.timestamp,
    data.studentLevel,
    data.overallPercentage,
    data.overallLevel,
    is.percentage, is.level,
    ai.percentage, ai.level,
    dl.percentage, dl.level,
    ac.percentage, ac.level,
  ]);
}

function writeSurvey(ss, data) {
  var headers = [
    'Timestamp',
    'Student Level',
    'Selected Workshops',
    'Preferred Time',
    'Comments',
  ];

  var sheet = getOrCreateSheet(ss, 'Survey', headers);

  sheet.appendRow([
    data.timestamp,
    data.studentLevel,
    (data.selectedWorkshops || []).join(', '),
    data.preferredTime || '',
    data.comments || '',
  ]);
}

// Test function — run manually to verify the script works
function testDoPost() {
  var testResult = {
    postData: {
      contents: JSON.stringify({
        type: 'result',
        timestamp: new Date().toISOString(),
        studentLevel: 'undergraduate',
        overallPercentage: 65,
        overallLevel: 'Intermediate',
        domains: {
          'Information Search & Evaluation': { percentage: 70, level: 'Intermediate' },
          'AI Literacy': { percentage: 55, level: 'Intermediate' },
          'Data Literacy': { percentage: 80, level: 'Advanced' },
          'Academic Information Use': { percentage: 55, level: 'Intermediate' },
        },
      }),
    },
  };
  doPost(testResult);
}
