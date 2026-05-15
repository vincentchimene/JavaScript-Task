//Write a function that accepts the following bank account object and
//returns: "Low Balance" if balance is below 1000, "Sufficient Balance" otherwise 
//const account = {accountName: "David", balance: 500}; 

const account = {accountName: "David", balance: 500}; 

function bankAccount(account){
    if (account.balance < 1000){
        return "Low Balance";
    }
    else{
        return "Sufficient Balance";
    }

}

console.log(bankAccount(account));
