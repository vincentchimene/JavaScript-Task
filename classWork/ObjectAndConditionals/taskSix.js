//const order = { status: "pending" };
// Return:  "Processing" → if pending, "Shipped" → if shipped,  "Delivered" → if delivered

const order = { status: "pending" };
if(order.status == "pending") {
    console.log("Processing");
}
if(order.status == "shipped") {
    console.log("Shipped");    
}
if(order.status == "delivered") {
    console.log("Delivered");      
}


