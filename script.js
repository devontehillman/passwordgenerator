// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

    

    var i = 0; //counter for loop
    var rand; // stores value for random number
    const arry = []; // creating empty array for numbers to bestored
    var stringLower = "abcdefghijklmnopqrstuvqxyz";
    var stringUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var stringNumber = "0123456789";
    var stringSpecial = "!@#$%^&*";
    var concat = ""; //string to store concat's string from users prompt

    // prompt questions
    var passWordLength = parseInt(prompt("PassWord length"));
    // Gets user input for length of password and coverts to a number
    var upper = confirm("Upper case?");
    //if yes add this condition to the concat var
    var lower = confirm("Lower case?");
    //if yes add this condition to the concat var
    var number = confirm("Numbers?");
    //if yes add this condition to the concat var
    var special = confirm("special character?");
    //if yes add this condition to the concat var

    // logical stament to combine users choices in to one string
    if (upper) {
        concat = concat + stringUpper;

        //alert("adding upper")
        //alert(concat)
    }

    if (lower) {
        concat = concat + stringLower;

        //alert("adding lower")
        //alert(concat)
    }

    if (number) {
        concat = concat + stringNumber;

        //alert("adding numbers")
        //alert(concat)
    }

    if (special) {
        concat = concat + stringSpecial;
        //alert("adding special characters")
        //alert(concat)
    }



    // loop to create random password
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    
    for (i = 0; i < passWordLength; i++) {

        arry[i] = concat.charAt(getRandomInt(concat.length)); // store random char number in each place of array. 

    }

    return (arry.join('')) //joins array together into a string to be displayed and returns it


}

// Write password to the #password input
function writePassword() { //function will be ran when generate is clicked
    var password = generatePassword(); //undefined function call this function and write your code in here 
    var passwordText = document.querySelector("#password"); // ignore query selector // returns generated password to html

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  // ignore 