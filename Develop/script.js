// Assignment code here
var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var downLetters = "abcdefghijklmnopqrstuvwxyz"
var specials = "\"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var numbers = "0123456789"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var upLets = prompt("Would you like the password to include upper case letters (Y/N)?");
    if(upLets!="Y" && upLets!="N"){
    alert("Invalid answer. Please enter Y or N.")
    return;
  }
  var downLets = prompt("Would you like the password to include lower case letters (Y/N)?");
  if(downLets!="Y" && downLets!="N"){
    alert("Invalid answer. Please enter Y or N.")
    return;
  }
  var specs = prompt("Would you like the password to include special characters (Y/N)?");
  if(specs!="Y" && specs!="N"){
    alert("Invalid answer. Please enter Y or N.")
    return;
  }
  var nums = prompt("Would you like the password to include numbers (Y/N)?");
  if(nums!="Y" && nums!="N"){
    alert("Invalid answer. Please enter Y or N.")
    return;
  }
  var passLength = prompt("How many characters would you like the password to be (Minimum: 8, Maximum: 128)?")
  if(passLength>128||passLength<8){
    alert("Invalid answer. Password length must be between 8 and 128 characters.")
  }

  var options = [];
  if(upLets==="Y"){
    options.push(upLetters);
  }
  if(downLets==="Y"){
    options.push(downLetters);
  }
  if(specs==="Y"){
    options.push(specials);
  }
  if(nums==="Y"){
    options.push(numbers);
  }

  

  function generatePassword(){
    result = "";
    for(x=1;x<=passLength;x++){
      var select = options[Math.floor(Math.random()*options.length)]
      result += select[Math.floor(Math.random()*select.length)]
    }
    return(result);
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
