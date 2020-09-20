//array to hold response variables
var responsesArray = ["wear a warm coat, hat, scarf and gloves","wear a warm coat but you won't need a hat, scarf or gloves.", "wear a less heavy coat.", "wear a light jacket and smile!", "Sorry the state or tempeture you listed was not found, try again!"]

//have the user enter their name
var firstName = prompt("Please enter your first name");
//have the user enter their state 
var userState = prompt("Please enter the name of your state using to letters ex. California is CA "); 
//have the user enter their temperature
var temp = prompt("Please enter the current temperature");

// if else statement 

//for NE and under 32 degrees 
if (userState == 'NE' && temp < '32') {
    let lowNE = [userState, temp];
    lowNE = NSB.MsgBox(firstName + " " + responsesArray[0])

  //for NE and between 32 and 50 degrees 
} else if (userState == 'NE' && (temp >= '32' && temp <= '50' )) {
  let highNE = [userState, temp]
  highNE = NSB.MsgBox(firstName + " " + responsesArray[1])

    //for FL and between 32 and 50 degrees 
} else if (userState == 'FL' &&  (temp >= '32' && temp <= '50' )) {
  let lowFL = [userState, temp]
  lowFL = NSB.MsgBox(firstName + " " + responsesArray[2])

   //for FL and between  50  and 70 degrees 
} else if (userState == 'FL' &&  (temp >= '50' && temp <= '70' )) {
  let highFL = [userState, temp]
  highFL = NSB.MsgBox(firstName + " " + responsesArray[3])

  //for all other cases 
} else {
NSB.MsgBox(responsesArray[4])
}