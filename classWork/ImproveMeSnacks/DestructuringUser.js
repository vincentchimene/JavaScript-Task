//Write a function that takes the following object and uses destructuring to extract name and age.
//const user = {name: "Amaka",age: 25,country: "Nigeria"}; 
const user = {name: "Amaka",age: 25,country: "Nigeria"}; 

function DestructuringUser(user){
let name = user.name;
let age = user.age;

console.log(name);
console.log(age);
}
DestructuringUser(user)



