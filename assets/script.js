// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// define variables
let password = "";

// Function to prompt user for password options. all of the prompts should be wrapped in this function.
function userOptions() {
  // password length.
  let passwordLength = prompt ("Enter the length you would like your password to be - between 10 & 64 characters: "); 
    if (passwordLength >= 10 && passwordLength <= 64) {
      alert ("You have selected ${passwordLength} characters");
    } else {
      alert ("Response is not valid");
    }
    var userChoiceLength = parsInt(passwordLength);
  
  // whether the password includes capital letters or not.
  let includeCaps = confirm ("Press OK if you would like to include capital letters in your password, otherwise, press cancel.");
  let includeLowerCase = confirm ("Press OK if you would like to include lower case letters in your password, otherwise, press cancel.");
  let includeNumbers = confirm ("Press OK if you would like to include numbers in your password, otherwise, press cancel.");

  return userOptions;
}

// Function for getting a random element from an array. rock paper scissors.
function getRandom(arr) {

}

// Function to generate password with user input. use above functions to implement this.
function generatePassword() {

}

// Get references to the #generate element. 
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);