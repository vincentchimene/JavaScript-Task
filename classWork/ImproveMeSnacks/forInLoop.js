//Given the object below, write code to print all the keys and values using a for...inloop:
//const country = { name: 'Nigeria', capital: 'Abuja', population: '200M' };

const country = { name: 'Nigeria', capital: 'Abuja', population: '200M' };
for(let item in country)
    console.log(`${item}: ${country[item]}`);
