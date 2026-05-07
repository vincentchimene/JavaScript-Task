//Write an if/else statement that checks if a number is positive, negative, or zero and prints the result. 
const prompt = require("prompt-sync")();
number = prompt("Enter number");
if (number < 0 ){
    console.log("Negative");
}

else if (number > 0 ){
    console.log("Positive");
}
else{
    console.log("Zero");
}

