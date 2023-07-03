// Assignment code here
var generateBtn = document.querySelector("#generate");

// Function to generate password
function generatePassword() {

// Available characters for passwords
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var symbol = "!?$£^&*@##`[]<>_-+=;:/|";
var charSelect = "";
var randomChar = "";

// First prompt to allow user to select acceptable password length
// Password must be between 8 - 128 characters
var keyLength = prompt("Password length must be no less than 8 and no more than 128 characters");

// Reselect characters if initial request is invalid
if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
  alert("Your password length is invalid, try again.");
  return;
// Upon valid character selection, the users selected characters will be confirmed to them via prompt
} else {
  var incLowerCase = confirm("Does your password require lowercase letters?");
  var incUpperCase = confirm("Does your password require uppercase letters?");
  var incNumeric = confirm("Does your password require a number?");
  var incSymbol = confirm("Does your password require a symbol?");
}

// Builing the character set based on the users selected criteria
if (incLowerCase) {charSelect += lowerCase};
if (incUpperCase) {charSelect += upperCase};
if (incNumeric) {charSelect += numeric};
if (incSymbol) {charSelect += symbol};

// Loop will end once password is generated
for (var i = 0; i < keyLength; i++) {
  randomChar += charSelect[Math.floor(Math.random() * charSelect.length)];
}

return randomChar;
}

// Write password to the #password input
function writePassword(randomChar) {
  var randomChar = generatePassword();

  // Check if the password is empty before displaying the final output
  var passwordText = document.querySelector("#password");
  if (!randomChar || randomChar.length === 0) {
    return;
}
  passwordText.value = randomChar;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
