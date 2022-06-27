// Assignment Code
//creates a variable for the id for generate pw button -- 
var generateBtn = document.querySelector("#generate");

//store the different options for character choices as strings in a constant
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
const getRandomLC = function lowerCaseFunc() {
  return Math.floor(Math.random() * lowerCaseArray.length);
}
console.log (getRandomLC);

//store all separate pw character options in one single var for easier randomization


//enable the "click" for the button (one time, enable the button, then disable again)
//generateBtn.addEventListener("click", pwCriteria);
document.addEventListener("click", pwFunction);




//generateBtn.disabled = true;

//start series of prompts referring to the pw criteria - 1 prompt for each criteria
//function pwCriteria ()

//1st prompt: length of pw 8-128 characters
pwLength = document.getElementById("pwlength")

//make sure that at least one box is checked
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
        //do something -- include this in a div or something in the html
        document.getElementById("displayText1").innerHTML = text1;
        //do something
        document.getElementById("displayText2").innerHTML = text2;
        //do something
        document.getElementById("displayText3").innerHTML = text3;
    }
    
    //HTML ?
    <span id="displayText1"></span>
    <span id="displayText2"></span>
    <span id="displayText3"></span>




  }
  return;
}

const lower =*/

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
