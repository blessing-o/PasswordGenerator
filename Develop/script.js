// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/**Generates a random number based on the 
 * users input on length and the characters allowed in the password
 */
function generatePassword(){
   let length = window.prompt("choose a length of at least 8 characters and no more than 128 characters");
   console.log(length);
   let lowerCase = "";
   let upperCase = "";
   let numbers = "";
   let specialCharacters  = "";

  while (true) {

    // Checks if userInput is a valid number
    if (!isNaN(length) && length > 7 && length <129) {
        break;
    } else {
        length = prompt("Please enter a valid input.");
    }
}

  //characters available to be selected
  let includeLowerCase = window.confirm("Do you want lowercase?");
  let includeUpperCase = window.confirm("Do you want uppercase?");
  let includeNumbers = window.confirm("Do you want numbers?");
  let includeSpecialCharacters = window.confirm("Do you want specialCharacters?");
  
  //variable to check if at least one of the characters are selected
  let proceed = (includeLowerCase || includeUpperCase || includeNumbers || includeSpecialCharacters);

  // console.log("for proceed"+ proceed);

  // console.log("l "+includeLowerCase);
  // console.log("u "+includeUpperCase);
  // console.log("n "+includeNumbers);
  // console.log("sc "+includeSpecialCharacters);
  
  //ensures the user as selected at least one character
   while(!proceed){
      alert("has to have one of the following");
      includeLowerCase = window.confirm("Do you want lowercase?");
      includeUpperCase = window.confirm("Do you want uppercase?");
      includeNumbers = window.confirm("Do you want numbers?");
      proceed = (includeLowerCase || includeUpperCase || includeNumbers || includeSpecialCharacters);
      includeSpecialCharacters = window.confirm("Do you want specialCharacters?");
    }
    

    if(includeLowerCase){
      lowerCase = "abcdefghijklmnopqrstuvwxyz"
    }
    if(includeUpperCase){
      upperCase = "ABCDEFGHIJKLMNOPQRSTUV"
    }
    if(includeNumbers){
      numbers = "0123456789"
    }
    if(includeSpecialCharacters){
      specialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~\\\"";
    }

    //all the characters allowed in the password based on the users choice
    let possibleCharacters = lowerCase + upperCase + numbers + specialCharacters;

    // console.log(possibleCharacters);
    // console.log(length);

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      var index = Math.floor(Math.random() * possibleCharacters.length);
      generatedPassword += possibleCharacters.charAt(index);
    }

    return generatedPassword;

}
