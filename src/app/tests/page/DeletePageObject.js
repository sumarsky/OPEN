var deleteUser = function() {

var someProfile =element.all(by.className('img-circle')).get(1);
var profiles =element.all(by.className('img-circle'));  
var deleteBtn= element(by.id('deleteBtn'));  
var YesBtn= element(by.id('daBtn'));  
var NoBtn= element(by.id('neBtn'));  
var modal= element(by.id('myModal'));
var alertwin = element(by.xpath('/html/body/app/div/alerts/div/div/text()'));
var alertmessage= element(by.id('messagelabel'));

this.get = function (value) {
        browser.get(value);
    };
    
    this.DeleteUser = function () {
        someProfile.click();
        deleteBtn.click();
        browser.wait(EC.visibilityOf(modal), 5000);
        YesBtn.click();
        browser.wait(EC.visibilityOf(someProfile), 5000);
        
        
    };  
    
    this.deleteBtnIsVisible = function(){
       var ispresent= deleteBtn.isPresent();
        return ispresent;
    };
     this.CancelDelete = function () {
        someProfile.click();
        deleteBtn.click();
        browser.wait(EC.visibilityOf(modal), 5000);
        NoBtn.click();
        
    };  
       
  
  this.ReturnMessage =function (){
       var message = alertmessage.getText();
       return message;   
       
     }
};
module.exports = new deleteUser();