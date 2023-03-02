// an object conatining an aray of characters to be included in password: special, numeric, lowercase & uppercase.
const characters = {
  specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".", ' '];
  numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
}

// Function for getting a random element from an array. rock paper scissors.
function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// an object containing functions containing all of the above characters.
const getCharacters = {
  function specialCharacters(){
    return characters.specialCharacters[Math.floor(Math.random() * character.specialCharacters.length)];
  }
  function numericCharacters(){
    return characters.numericCharacters[Math.floor(Math.random() * character.numericCharacters.length)];
  }
  function lowerCasedCharacters(){
    return characters.lowerCasedCharacters[Math.floor(Math.random() * character.lowerCasedCharacters.length)];
  }
  function upperCasedCharacters(){
    return characters.upperCasedCharacters[Math.floor(Math.random() * character.upperCasedCharacters.length)];
  }
}

// define variables
let password = "";
let passwordLength = [];

// function to prompt user for all password options.
function userOptions() {
  // create a prompt for the user to determine their password length.
    // validate the input - ensure the character length is between 10 & 64.
  let passwordLength = parseInt(prompt("How many characters would you like your password to have? - between 10 & 64 characters: ")); 
    if (passwordLength >= 10 && passwordLength <= 64) {
      alert ("You have selected ${passwordLength} characters");
    } 
    
    
    else {
      alert ("Response is not valid");
    }
    // lowercase, upercase, or special characters
      //validate the input = ensure at least one character type is being selected.
      let includeCaps = confirm ("Press OK if you would like to include capital letters in your password, otherwise, press cancel.");
      let includeLowerCase = confirm ("Press OK if you would like to include lower case letters in your password, otherwise, press cancel.");
      let includeNumbers = confirm ("Press OK if you would like to include numbers in your password, otherwise, press cancel.");
      let includeSpecialCharacters = confirm ("Press OK if you would like to include special characters in your password, otherwise, press cancel.");
  
  //display generated password on the page.
  return "generated password";
}



// Function to generate password with user input. use above functions to implement this.

let character = [];

function generatePassword() {
  userOptions();
  if (userOptions.includeCaps) {
    characters = characters.concat(upperCasedCharacters)
  } if (userOptions.includeLowerCase) {
    characters = characters.concat(lowerCasedCharacters)
  } if (userOptions.includeNumbers) {
    characters = characters.concat(numericCharacters) 
  } if (userOptions.includeSpecialCharacters) {
    characters = characters.concat(specialCharacters);
  }
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