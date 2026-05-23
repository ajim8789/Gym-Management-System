function doGet(e) {
  return ContentService.createTextOutput("✅ Web App is Running");
}

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.name,
      data.email,
      data.mobile,
      data.gender,
      data.password
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'Success' }))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'Error', error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
