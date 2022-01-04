
// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "{", "}", "|", "[", "]", "?"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var characters = [alphabetUpper, alphabetLower, special, numbers];


//Users variables
var userLower = "";
var userUpper = "";
var userSpecial = "";
var userNumber = "";


function writePassword() {
  
    var passwordText = document.querySelector("#password");
   
}  

//  Prompt User for Password criteria
function generatePassword() {
    console.log(generatePassword);
     
    var userLength = window.prompt("How many characters? (8 - 128)"); 
    // var passwordLength = userLength.value;
    
    if (userLength < 8 || userLength > 128) {
    window.alert("MUST CHOOSE CHARACTER BETWEEN 8- 128")
    return;
    }
    else {
        window.confirm("You choose " + userLength); 
        console.log(userLength);   
    } 
    var userUpper = window.confirm("Include UPPERCASE letters?");
    console.log(userUpper);
   
   var userLower = window.confirm("Include lowercase letters?");
       console.log(userLower);

   var userSpecial = window.confirm("Include special characters?");
       console.log(userSpecial);

   var userNumbers = window.confirm("Include numbers?");
       console.log(userNumbers);

// Vadiate Users choices
    window.alert(
        "You choose: \nLength: " + userLength + "\nUPPERCASE: " + userUpper + "\nlowercase: " + userLower + "\nSpecial Characters: " + userSpecial + "\nNumbers: "
+ userNumbers
    );  
    // Removes the users false selection from the array
    if (userUpper = false) {
        characters.splice(0);
        console.log(characters.splice);
    }

    if (userLower = false) {
        characters.splice(1);
        console.log(characters.splice);
    }

    if (userSpecial = false) {
        characters.splice(2);
        console.log(characters.splice)
    }

    if (userNumbers = false) {
        characters.splice(3);
        console.log(characters.splice);
    }


//   Randomizes password character
    for (var i=0; i < userLength; i++) {
        var password = characters[Math.floor(Math.random() * characters.length - 1)]; 
        console.log(password);

        var passwordHTML = document.getElementById("password");
        passwordHTML.value = password;
      
       
    
}}

generatePassword();
writePassword();
generateBtn.addEventListener("click", writePassword);
 
