//Write a function that takes a student's score from a user and prints their grade using the following scale: 70 and above  →  A,   60 – 69  →  B,                 50 – 59  →  C,  40 – 49  →  D,  Below 40  →  F

const prompt = require("prompt-sync")();
let score = prompt("Enter score: ");
if (score < 40){
    grade = 'F'; 
}
else if (score < 50){
    grade = 'D';
}
else if (score < 50){
    grade = 'C';
}
else if (score < 70){
    grade = 'B';
}
else if (score >= 70){
    grade = 'A';
}
console.log(grade);
