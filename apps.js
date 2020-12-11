// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { //function will be ran when generate is clicked
  var password = generatePassword(); //undefined function call this function and write your code in here 
  var passwordText = document.querySelector("#password"); // ignore query selector 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  // ignore 