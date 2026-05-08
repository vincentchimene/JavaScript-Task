// program that takes two numbers and print their product
const prompt = require("prompt-sync")();

let number1 = Number(prompt("Enter number1: "));
let number2 = Number(prompt("Enter number2: "));
let product = number1 * number2;
console.log(`The product of ${number1} and ${number2} is ${product}`)

