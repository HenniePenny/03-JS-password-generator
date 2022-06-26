// Assignment Code
//creates a variable for the id for generate pw button -- 
var generateBtn = document.querySelector("#generate");

//store options for passwords in variables
let lengthOfPw = document.getElementsByClassName("length");

const lowerCase = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
const lowerCaseArray = lowerCase.split(",");

const upperCase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"
const upperCaseArray = upperCase.split(",");

const numbers = "1,2,3,4,5,6,7,8,9,0"
const numbersArray = numbers.split(",");

const specialChar = "!,§,$,%,&,/,?,*,#,-,<,+,;,(,)"
const specialCharArray = specialChar.split(",");

//make functions for each character type to randomize selection for password


//store all separate pw character options in one single var for easier randomization


//enable the "click" for the button (one time, enable the button, then disable again)
//generateBtn.addEventListener("click", pwCriteria);
document.addEventListener("click", pwFunction);




//generateBtn.disabled = true;

//start series of prompts referring to the pw criteria - 1 prompt for each criteria
//function pwCriteria ()

//1st prompt: length of pw 8-128 characters
pwLength = document.getElementById("pwlength")


//2nd prompt: lower case letters? + validation
//3rd prompt: upper case letters? + validation
//4th prompt: numbers? + validation
//5th prompt: and/or special characters? + validation
//choose at least one

//after all prompts generate password

//display pw (check the #aria-label)



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
