//program that takes two numbers and print their sum.

const prompt = require("prompt-sync")();

let number1 = Number(prompt("Enter Number1: "));
let number2 = Number(prompt("Enter number2: "));
let sum = number1 + number2;
console.log(`sum of ${number1} and ${number2} is ${sum}`);


