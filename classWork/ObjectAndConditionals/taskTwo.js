//Create a JavaScript object called student with the following properties:
// name: your name, age: your age, course: your course of study
const prompt = require("prompt-sync")();

let student = {
    name: prompt("Enter your name? "),
    age: prompt("Enter your age? "),
    course: prompt("your course of study"),
}

console.log(student);
