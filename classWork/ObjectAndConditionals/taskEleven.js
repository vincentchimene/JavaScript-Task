//Given the object below, use destructuring to extract name and city into separate variables:


const profile = { name: "Emeka", age: 31, city: "Abuja", role: "Engineer" };
const {name, city} = profile;
const {name: Vincent} = profile;
const {city: PH} = profile;

console.log(name);
