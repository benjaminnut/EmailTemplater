/*
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getActiveSheet();
var lastRow = sheet.getLastRow();
var lastColumn = sheet.getLastColumn();
var scriptProperties = PropertiesService.getScriptProperties();
*/

function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2; // Start at second row because the first row contains the data labels
  var numRows = 3; // Put in here the number of rows you want to process

  // Fetch the range of cells A2:B4
  // Column A = Email Address, Column B = First Name
  var dataRange = sheet.getRange(startRow, 1, numRows, 2)
  
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  for (i in data) {
   var row = data[i];
   var emailAddress = row[0]; // First column of selected data
   var message = "Hi [Name], \n \n Thanks so much for your question about [topic].I just wanted to let you know that I’m looking into it and will get back to you before the end of week with an answer. \n \n If you need me to get back to you sooner, please let me know! \n \n Best, " +
row[1]; 
// Assemble the body text
   var subject = "Sending emails from the E-mail Templater App!!!";
   MailApp.sendEmail(emailAddress, subject, message);
  }
}


