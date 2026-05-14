//Write a function that takes an object and uses destructuring
//to extract the name and salary properties from it.
//const employee = { name: 'Dapo', role: 'Engineer', salary: 50000, department: 'Tech' };

function destructuring(){
const employee = { name: 'Dapo', role: 'Engineer', salary: 50000, department: 'Tech' };
const {name, salary} = employee;
const {name: Vincent} = employee;
const {salary: 50000} = employee;
console.log(name);
//console.log(salary);
}
destructuring();
