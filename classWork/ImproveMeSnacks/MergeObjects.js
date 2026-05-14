//Write a function that takes two objects and merges them into one.       
const personal = { name: 'Kemi', age:27 };
const professional = { role: 'Designer', company: 'TechCorp' };
function mergeObjects(personal, professional){
    const merge = {...personal, ...professional}
    return merge;
}
console.log(personal);
console.log(professional);
console.log(mergeObjects(personal, professional));   





