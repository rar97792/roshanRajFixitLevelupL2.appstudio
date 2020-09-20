//arrary to hold response variables
var responsesArray = ["wear a warm coat, hat, scarf and gloves","wear a warm coat but you won't need a hat, scarf or gloves.", "wear a less heavy coat.", "wear a light jacket and smile!", "Sorry the state or tempeture you listed was not found, try again!"]

//have user enter in their name 
var firstName = prompt("Please enter your first name");

//have the user enter their state 
var userState = prompt("Please enter the name of your state using to letters ex. California is CA "); 

//have the user enter their temperature
var temp = prompt("Please enter the current temperature");

//switch statements
switch(true) {
  case (userState == 'NE' && temp < '32'):
    NSB.MsgBox(firstName + " " + responsesArray[0])
    break
    
//for NE and between 32 and 50 degrees    
  case (userState == 'NE' && (temp >= '32' && temp <= '50' )):
     NSB.MsgBox(firstName + " " + responsesArray[1])
     break
     
//for FL and between 32 and 50 degrees 
  case (userState == 'FL' &&  (temp >= '32' && temp <= '50' )):
    NSB.MsgBox(firstName + " " + responsesArray[2])
    break
    
//for FL and between  50  and 70 degrees 
  case (userState == 'FL' &&  (temp >= '50' && temp <= '70' )):
    NSB.MsgBox(firstName + " " + responsesArray[3])
    break
    
// default
  default:
    NSB.MsgBox(responsesArray[4])
}