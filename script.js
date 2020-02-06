/*Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

*/

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var characters = ["!", "@", "#", "$", "%", "^", "*", "(", ")"];

var password = [];

var finalPassword = "";

var length = "";

document.getElementById("generate").onclick = function() {
  length = prompt(
    "How long would you like your password to be?  Please pick between 8 and 128 characters."
  );
  var result = confirm("would you like to include lower-case letters?");
  if (result == true) {
    password = password.concat(lowerCase);
  }
  var result = confirm("Would you like to include upper-case letters?");
  if (result == true) {
    password = password.concat(upperCase);
  }
  var result = confirm("Would you like to include numbers?");
  if (result == true) {
    password = password.concat(numbers);
  }
  var result = confirm("Would you like to include uniqure characters?");
  if (result == true) {
    password = password.concat(characters);
  }

  for (i = 0; i < length; i++) {
    x = Math.floor(Math.random() * password.length);
    finalPassword = finalPassword + password[x];
  }
  document.getElementById("password").innerHTML = finalPassword;
};