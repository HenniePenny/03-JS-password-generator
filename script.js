// Assignment Code
//creates a variable for the id for generate pw button -- 
var generateBtn = document.querySelector("#generate");

//store the different options for character choices as arrays and store them all in one var?

const lowerCaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numberOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialCharOptions = ["!", "§", "$", "%", "&", "/", "?", "*", "#", "-", "<", "+", ";", "(", ")"];

//1st prompt: length of pw 8-128 characters
/*make prompt for pw length and store the value in a let, make it a function to only allow numbers between 8 and 128; 
if not entered, alert what the input needs to be;*/
// TODO: make it a loop so that it starts a the beginning if the criteria are not met

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
  };
  return lengthInput;
}


const allowedCharacters = function() {
  let lowerCaseLetters = confirm("Do you want to include lower case letters in your password? (e.g.: abcdef)");
  if (confirm(lowerCaseLetters) == true) {
    alert ("Your password will include lower case letters.");
    allowedCharacters();
  } else {
    alert ("Your password will not include lower case letters.");
  };
      
  let upperCaseLetters = confirm("Do you want to include upper case letters in your password? (e.g.: ABCDEF)");
  if (confirm(upperCaseLetters) == true) {
    alert ("Your password will upper lower case letters.");
  } else {
    alert ("Your password will not include upper case letters.");
  }

  let numericCharacters = confirm("Do you want to include numbers in your password? (e.g. 123456");
  if (confirm(numericCharacters) == true) {
    alert ("Your password will include numbers.");
  } else {
    alert ("Your password will not include numbers.");
  }

  let specialCharacters = confirm("Do you want to include special characters in your password? (e.g. !?&%*#/");
  if (confirm(specialCharacters) == true) {
    alert ("Your password will include special characters.");
  } else {
    alert ("Your password will not include special characters.");
  }
  return(allowedCharacters)
}


const generatePassword = function() {
  let passwordLength = getLength();
  let passwordCharacters = allowedCharacters();
  console.log(passwordCharacters);
}
//make prompts for the character options



//2nd prompt: lower case letters? + validation
//3rd prompt: upper case letters? + validation
//4th prompt: numbers? + validation
//5th prompt: and/or special characters? + validation
//choose at least one




/*const lower = document.getElementById("lowerCheck").checked;
const upper = document.getElementById("upperCheck").checked;
const number = document.getElementById("numbersCheck").checked;
const symbol = document.getElementById("specialCheck").checked;
if (lower + upper + number + symbol === 0) {
  alert("You must check at least one box!");
}
  else   
    function doSomeThing()
    {
        
    }

//make a function that checks the selected options, validate choice, include alert if none are selected ()
//function pwCriteria ()

//make a function that includes all character types according to choice (if, else?)
const getRandomLC = function lowerCaseFunc() {
  return Math.floor(Math.random() * lowerCaseArray.length);
}

/*take that function and now generate random characters according to desired password length and chosen characters - for loop (within each loop create)
a random character*/
//function generatePassword

//define var passwordText


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //text input value property
  passwordText.value = "password";
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
