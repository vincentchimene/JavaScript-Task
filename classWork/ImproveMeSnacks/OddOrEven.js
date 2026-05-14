//Write a program that checks if a number entered by the user is even or odd.

const prompt = require("prompt-sync")();
   let number = prompt("Enter number");
    if (number % 2 == 0){
        console.log("Even")   
    }
    else{
        console.log("Odd") 
    }
