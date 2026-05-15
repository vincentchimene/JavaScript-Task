//Write a function that removes the password property from the following user object.
//const user = {username: "admin",password: "12345"}; 

const user = {username: "admin",password: "12345"}; 

function removePassword(user){
    delete user.password;
    return user;
}

console.log(removePassword(user));
