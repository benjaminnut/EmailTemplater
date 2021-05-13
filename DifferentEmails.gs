function DifferentEmails() {

var sheet = SpreadsheetApp.getActiveSpreadsheet()
var sheet3=sheet.getSheetByName('Sheet3');
var n=sheet3.getLastRow();

  for (var i = 2; i < n+1 ; i++ ) {
var emailAddress = sheet3.getRange(i,1).getValue();
var subject = sheet3.getRange(i,2).getValue();
var message = sheet3.getRange(i,3).getValue();
MailApp.sendEmail(emailAddress, subject, message);
}

}




