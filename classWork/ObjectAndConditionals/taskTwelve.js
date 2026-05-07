//Use the spread operator to merge these two objects into one:
//const personal = { name: "Ngozi", age: 25 };
//const professional = { role: "Developer", company: "Semicolon" };
//

const personal = { name: "Ngozi", age: 25 };
const professional = { role: "Developer", company: "Semicolon" };

const merge={...personal, ...professional}
console.log(personal);
console.log(professional);
console.log(merge);
