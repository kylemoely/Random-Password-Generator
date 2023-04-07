// Assignment code here
var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var downLetters = "abcdefghijklmnopqrstuvwxyz"
var specials = "\"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var numbers = "0123456789"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// var prp = prompt("Enter")
// for(x=0;x<prp.length;x++){
//   console.log(numbers.includes(prp[x]))
// }


// Write password to the #password input
function writePassword() {
  var upLets = prompt("Would you like the password to include upper case letters (Y/N)?");
    if(upLets===null){
      return;
    }
    if(upLets!="Y" && upLets!="N" && upLets!="y" && upLets!="n"){
    alert("Invalid answer. Please enter Y or N.")
    return;
  }
  var downLets = prompt("Would you like the password to include lower case letters (Y/N)?");
  if(downLets===null){
    return;
  }
  if(downLets!="Y" && downLets!="N" && downLets!="y" && downLets!="n"){
    alert("Invalid answer. Please enter Y or N.")
    return;
  }
  var specs = prompt("Would you like the password to include special characters (Y/N)?");
  if(specs===null){
    return;
  }
  if(specs!="Y" && specs!="N" && specs!="y" && specs!="n"){
    alert("Invalid answer. Please enter Y or N.")
    return;
  }
  var nums = prompt("Would you like the password to include numbers (Y/N)?");
  if(nums===null){
    return;
  }
  if(nums!="Y" && nums!="N" && nums!="y" && nums!="n"){
    alert("Invalid answer. Please enter Y or N.")
    return;
  }
  if((upLets==="N" || upLets==="n") && (downLets==="N" || downLets==="n") && (specs==="N" || specs==="n") && (nums==="N" || nums==="n")){
    alert("Invalid request. Your password must contain characters.")
    return;
  }

  var numbers = "0123456789";

  var passLength = prompt("How many characters would you like the password to be (Minimum: 8, Maximum: 128)?")
  if(passLength===null){
    return;
  }
  for(x=0;x<passLength.length;x++){
    if(numbers.includes(passLength[x])===false){
      alert("Invalid answer. Please enter a number.")
      return;
    }
  }
  if(passLength>128||passLength<8){
    alert("Invalid answer. Password length must be between 8 and 128 characters.")
    return;
  }

  var options = [];
  if(upLets==="Y" || upLets==="y"){
    options.push(upLetters);
  }
  if(downLets==="Y" || downLets==="y"){
    options.push(downLetters);
  }
  if(specs==="Y" || specs==="y"){
    options.push(specials);
  }
  if(nums==="Y" || nums==="y"){
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
