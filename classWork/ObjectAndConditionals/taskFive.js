//const student = { name: “Amaka”, score: 75 }; From the object;
//return grade: 90+ → A, 80–89 → B, 70–79 → C, below → F

const student = { name: "Amaka", score: 75 };

if(student.score >= 90){
    console.log('A');
}
if(student.score >= 80 && student.score <= 89){
    console.log('B');    
}
if(student.score >= 70 && student.score <= 79){
    console.log('C');   
}
else {
    console.log('F');     
}



