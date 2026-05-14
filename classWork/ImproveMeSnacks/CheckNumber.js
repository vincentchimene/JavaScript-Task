//Write a function that checks whether a number is positive, negative, or zero

const prompt = require("prompt-sync")();

const number = prompt("Enter number: ");
let message = ""
function checkNumber(number){
    if(number < 0){
        message = "Negative number.";    
    }
    else if(number == 0){
        message = "Number is zero";
    }
    else{
        message = "Positive Number";
    }
    return message;

}

console.log(checkNumber(number));
