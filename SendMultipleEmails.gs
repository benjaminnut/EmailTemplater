function sendMultipleEmails() {

var sheet = SpreadsheetApp.getActiveSpreadsheet()
var sheet1=sheet.getSheetByName('Sheet1');
var sheet2=sheet.getSheetByName('Sheet2');


var subject = sheet2.getRange(2,2).getValue();
var n=sheet1.getLastRow();
for (var i = 2; i < n+1 ; i++ ) {
var emailAddress = sheet1.getRange(i,1).getValue();
var name=sheet1.getRange(i,2).getValue();
var itemOrdered=sheet1.getRange(i,3).getValue();
var message = sheet2.getRange(3,1).getValue();

message=message.replace("<name>",name).replace("<item>",itemOrdered);
MailApp.sendEmail(emailAddress, subject, message);
}
}

function getRow(savedRow){
  var messageRow = savedRow;
  return messageRow;
}
