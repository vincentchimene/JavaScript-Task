//Write a function that accepts the following phone object and returns the battery percentage.
//const phone = {brand: "Samsung",battery: 75}; 


const phone = {brand: "Samsung",battery: 75}; 

function getBatteryPercentage(phone){
return phone.battery;
}

console.log(getBatteryPercentage(phone));
