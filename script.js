// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabetLower = ("abcdefghijklmnopqrstuvwxyz");
var alphabetUpper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var special = ("!@#$%^&*()_+~{}|[]\<>?,./:;'");
var numbers = ("0123456789");
var charactersLength = [alphabetUpper, alphabetLower, special, numbers];


//Users variables
var userLower = "";
var userUpper = "";
var userSpecial = "";
var userNumber = "";


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}  

generateBtn.addEventListener("click", writePassword);


// 1. Prompt User for Password criteria
function generatePassword() {

     var userLength = window.prompt("How many characters? (8 - 128)"); 

    
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

    var index = Math.floor(Math.random() * charactersLength.length);
    var generatedPW
   
    for (var i=0; i< charactersLength.length; i++) {
        passwordText += charactersLength[i]; 
        console.log(passwordText);
    }
    
// // 1.a password 8 - 128 letters in length, array
} 
// // function getRandomNumber() 
// //     {
// //         (Math.floor(math.random() * 128) + 8);
// //     } 
// //  console.log(getRandomNumber);


// // 1.b lower case, upper case, numberic, and special
// var userLower = alphabetLower[Math.floor(Math.random())]


// 2. validate input, run for loop

// for (var i=0; i< characterLength; i++)
// 3. Generate password

// 4. display generated pw 
// {return "Generated password will go here!";
// }


// // Write password to the #password input


// function generatePassword() {
//     password = "";

// Add event listener to generate button

