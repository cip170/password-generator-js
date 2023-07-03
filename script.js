// Assignment code here
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var symbol = "!?$£^&*@##`[]<>_-+=;:/|";

// Prompts for password criteria
var lowerCase = confirm("Does your password require lowercase letters?");
var upperCase = confirm("Does your password require uppercase letters?");
var numeric = confirm("Does your password require a number?");
var symbol = confirm("Does your password require a symbol?");

// Password must be between 8 - 128 characters
if (keyLength < 8 || keyLength > 128) {
  alert("Your password length is invalid");
  var keyLength = prompt("Password length must be no less than 8 and no more than 128 characters")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
