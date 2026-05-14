// Write a program using a conditional statement that takes a traffic light color 
//and prints the instruct : "Red" → Stop, "Yellow"  →  Get Ready , "Green"  →  Go.

const prompt = require("prompt-sync")();
let color = prompt("Enter color: ");
switch (color){
    case "Red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Get Ready");
        break;      
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Entry!")   



}
