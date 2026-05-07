//const user = { points: 90 };
//  If points ≥ 100 → set status = "Gold"
//  Else → status = "Silver"

const user = { points: 90 };

(user.points >= 100)? user.status = "Gold" : user.status = "Silver"; 

console.log(user);
