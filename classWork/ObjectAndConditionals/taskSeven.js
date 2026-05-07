//const account = { balance: 500, isBlocked: false};
//If blocked → "Account blocked"
// Else if balance < 100 → "Low balance"
// Else → "OK"
//
const account = { balance: 500, isBlocked: false};
if(account.isBlocked == "true") {
    console.log("Account blocked");
}
else if (account.balance < 100){
    console.log("Low balance");  
}
else {
    console.log("OK");
}
