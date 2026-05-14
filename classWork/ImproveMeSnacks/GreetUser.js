//Write a function called greetUser that accepts a name and returns a greeting.
const prompt = require("prompt-sync")();
let name = prompt("Enter your name: ");
function greetUser(name){
    let message =  "Hello " + name;
    return message;
}
console.log(greetUser(name));
