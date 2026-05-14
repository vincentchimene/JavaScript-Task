//Write a switch statement that takes a day of the week and prints whether it is a Weekday or Weekend
const prompt = require("prompt-sync")();
let day = prompt("Enter day: ");
switch (day){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
    console.log("Weekday");
    break;
}
switch (day){
    case "Saturday":
    case "Sunday":
    console.log("Weekend");
    break;

}
