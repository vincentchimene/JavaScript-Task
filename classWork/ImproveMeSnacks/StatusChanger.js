//Write a function that changes the status of the following order object from "pending" to "delivered".
//const order = {id: 1,status: "pending"}; 


const order = {id: 1,status: "pending"}; 

function changeStatus(order){
    order.status = "delivered";
    return order;

}
console.log(changeStatus(order));
