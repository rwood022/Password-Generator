// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabetLower = ("abcdefghijklmnopqrstuvwxyz");
var alphabetUpper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var special = ("!@#$%^&*()_+~{}|[]\<>?,./:;'");
var numbers = ("0123456789");
var characters = [alphabetUpper, alphabetLower, special, numbers];
console.lo

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}  

// 1. prompt user for pw criteria
function generatePassword() {
    window.prompt("How many characters? (8 - 128)");
    console.log(window.prompt);
    

    // window.prompt("Include uppercase letters?");
    // window.prompt("Include lowercase letter?");
    // window.prompt("Include numbers?");
    // window.prompt("Include special characters?");
    

// 1.a password 8 - 128 letters in length, array
function getRandomNumer () {
    (Math.floor(math.random() * 128) + 8);
}


// 1.b lower case, upper case, numberic, and special
var randomLower = alhabetLower[Math.floor(Math.random())]


}

// 2. validate input, run for loop

// for (var i=0; i< characterLength; i++)
// 3. Generate password

// 4. display generated pw 
// {return "Generated password will go here!";
// }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


