//Write a function that accepts a person's age and returns Child, Teen, or Adult.
const prompt = require("prompt-sync")();
const age = prompt("Enter your age: ");
let group = "";
function ageGroup(age){
    if (age < 13){
        group = "Child";
        
    }
    else if (age < 20){
        group = "Teenager";         
          
    }
    else{
        group = "Adult"
    }    
        return group;  

}

console.log(ageGroup(age));
