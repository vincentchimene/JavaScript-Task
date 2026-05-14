//Write a function that collects a username and password from the user and validate login.

const prompt = require("prompt-sync")();
const userName = prompt("Enter Username: ");
const password = prompt("Enter Password: ");
let message = "";
function loginValidator(userName, password){
    if (userName.length < 4 || password.length < 8){
    message = "Invalid Login details";
    }
    else{
        message = "login validated"
    }
    return message;
}

console.log(loginValidator(userName, password));
