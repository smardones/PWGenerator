// Assignment code here
var upperChar = ["A","B","C","D","E","F","G","H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "&", "*", "?", "-", "_"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function passwordLength() {
  var pwCharLength = window.prompt("Please select how many characters you would like your password to be with a minimum of 8 and a maximum of 128.");
  console.log(pwCharLength);
  lengthInput = parseInt(pwCharLength);
  
    if (lengthInput >= 8 && lengthInput <= 128) {
      window.alert("Thank you! You have chosen " + lengthInput + " characters.");
  } else {
      window.alert("Please select a number between 8 and 128.")
      passwordLength();
  }
  
 }

 function randomizer(arr) {
    var arrayIndex = Math.floor(Math.random() * arr.length);
    selectedCharacter = arr[arrayIndex];
    console.log(selectedCharacter);
    return selectedCharacter;
 }


function generatePassword(upper, lower, numeric, special) {

var pwd = "";

var choices = [{upper}, {lower}, {numeric}, {special}];
console.log([choices]);

  if (upper) {
  pwd += randomizer(upperChar);
  }
    
  if (lower) {
  pwd += randomizer(lowerChar);
  }

  if (numeric) {
  pwd += randomizer(numericChar);
  }

  if (special) {
  pwd += randomizer(specialChar);
  }
  for (i = 0; i <= lengthInput; i++);

  console.log(pwd);

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

passwordLength();

var upperConfirm = window.confirm("Would you like to include upper case letters?");
var lowerConfirm = window.confirm("Would you like to include lower case letters?");
var numericConfirm = window.confirm("Would you like to include numbers?");
var specialConfirm = window.confirm("Would you like to include special characters?");


generatePassword(upperConfirm, lowerConfirm, numericConfirm, specialConfirm);