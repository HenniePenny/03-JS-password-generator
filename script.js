// Assignment Code
//selects the button in the html document via querySelector 
var generateBtn = document.querySelector("#generate");

//store the different options for character choices as arrays and store them all in one var?

const lowerCaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numberOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialCharOptions = ["!", "§", "$", "%", "&", "/", "?", "*", "#", "-", "<", "+", ";", "(", ")"];

//empty string to store the possible chosen characters for the password
let chosenCharacters = [];

//1st prompt: length of pw 8-128 characters
//make prompt for pw length and store the value in a const, make it a function to only allow numbers between 8 and 128; 
//if not entered, alert what the input needs to be

const getLength = function() {
  let lengthInput = prompt("Please choose your password length by entering a number between 8 and 128.");
  if (lengthInput < 8) {
    alert ("Your password must be at least 8 characters long.");
    getLength();
  } else if (lengthInput > 129) {
      alert ("Your password can contain a maximum of 128 characters.");
      getLength();
  } else{
    alert ("Your password will contain " + lengthInput + " characters.");
  }
  return lengthInput;
}

//creating a series of prompts to ask for the different components of password characters
const allowedCharacters = function() {
  let lowerCaseLetters = confirm("Do you want to include lower case letters in your password? (e.g.: abcdef)");
  if (lowerCaseLetters == true) {
    alert ("Your password will include lower case letters.");
  } else {
    alert ("Your password will not include lower case letters.");
  }
  if (lowerCaseLetters) {
    chosenCharacters = chosenCharacters.concat(lowerCaseOptions);
  }
    
  let upperCaseLetters = confirm("Do you want to include upper case letters in your password? (e.g.: ABCDEF)");
  if (upperCaseLetters == true) {
    alert ("Your password will upper case letters.");
  } else {
    alert ("Your password will not include upper case letters.");
  }
  if (upperCaseLetters) {
    chosenCharacters = chosenCharacters.concat(upperCaseLetters);
  }

  let numericCharacters = confirm("Do you want to include numbers in your password? (e.g. 123456)");
  if (numericCharacters == true) {
    alert ("Your password will include numbers.");
  } else {
    alert ("Your password will not include numbers.");
  }
  if (numericCharacters) {
    chosenCharacters = chosenCharacters.concat(numericCharacters);
  }

  let specialCharacters = confirm("Do you want to include special characters in your password? (e.g. !?&%*#/)");
  if (specialCharacters == true) {
    alert ("Your password will include special characters.");
  } else {
    alert ("Your password will not include special characters.");
  };
  if (specialCharacters) {
    chosenCharacters = chosenCharacters.concat(specialCharacters);
  }

  //if none of the above options are selected, give alert and start over
  if (lowerCaseLetters == false && upperCaseLetters == false && numericCharacters == false && specialCharacters == false) {
    alert ("Your password must contain at least one set of characters. Please start again.");
    getLength();
    allowedCharacters();
  }
}

//function generatePassword
function generatePassword() {
    for (var i = 0; i < getLength; i++) {
     var randomNumber = Math.floor(Math.random() * chosenCharacters.length);
     password = password * chosenCharacters[randomNumber];
    }
    return password;
  //let passwordCharacters = allowedCharacters();
  //const getSelectedChar = allowedCharacters();
  //const getSelectedChar = function allowedCharacters() {
    
}


  //let lowerCaseIndex = Math.floor(Math.random() * lowerCaseOptions.length);
  //lowerCaseLetters = lowerCaseOptions[lowerCaseIndex];
  //console.log(lowerCaseLetters);
  
/*take that function and now generate random characters according to desired password length and chosen characters - for loop (within each loop create)
a random character*/




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //text input value property
  passwordText.value = "password";
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
