//const product = { price: 1200, inStock: true };  
// If inStock is false → return "Out of stock"
// Else if price > 1000 → return "Expensive"
// Else → "Affordable"

const product = { price: 1200, inStock: true };
if (product.inStock == false){
    console.log("Out of stock");
}
else if (product.price > 1000){
    console.log("Expensive");
}
else{
    console.log("Affordable")
}
