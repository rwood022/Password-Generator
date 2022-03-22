// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "{", "}", "|", "[", "]", "?"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var characters = [alphabetUpper, alphabetLower, special, numbers];


// User's array of choosen character
var userChoice = [];
var results = "";
var password = [];


//  Prompt User for Password criteria
function generateChoices() {
    console.log(generateChoices);
     
    var userLength = window.prompt("How many characters? (8 - 128)"); 

    // Collects the users desired password length;
    if (userLength < 8 || userLength > 128) {
    window.alert("MUST CHOOSE CHARACTER BETWEEN 8- 128")
    return;
    }
    else {
        window.confirm("You choose " + userLength); 
        console.log(userLength);   
    } 

    // Adds UPPERCASE letters to userChoice array
    if(confirm("Include UPPERCASE letters?")){
        Array.prototype.push.apply(userChoice, alphabetUpper);  
    } console.log(userChoice);

      
    // Adds lowercase letters to userChoice array
    if(confirm("Include lowercase letters?")){
        Array.prototype.push.apply(userChoice, alphabetLower);
        console.log(userChoice);
    }
  

    // Adds special characters to userChoice array
    if(confirm("Include special characters?")){
        Array.prototype.push.apply(userChoice, special);
    }   console.log(userChoice);
   

    // Adds numbers to userChoice array
    if(confirm("Include numbers?")){
        Array.prototype.push.apply(userChoice, numbers);
    }   console.log(userChoice);
 

//Vadiate Users choices, will show all options choosen or not
    window.alert(
        "You choose: \nLength: " + userLength + "\nUPPERCASE: " + alphabetUpper + "\nlowercase: " + alphabetLower + "\nSpecial Characters: " + special + "\nNumbers: "
    + numbers
    );   

    // For Loop to loop through the userChoice array at the length of the userLength
     for (var i = 0; i < userLength; i++) {
        var password = Math.floor(Math.random() * userChoice.length); 
        results += userChoice[password];
    }

    // adds password results to HTML id "password"
    document.getElementById("password").innerHTML = results;
}



generateChoices();
console.log(generateBtn);
 
