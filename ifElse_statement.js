// if statement
let age = 19;
let firstName = "Vinay";

if(age>=18){
    console.log(`${firstName}can start driving licens 🚙`);
}

// if else statement
// Example 1
age = 17;
firstName = "Kajol";
isOldEnough=age>=18;

if(age>=18){
    console.log(`${firstName}can start driving licens 🚙`);
}else{
    const yearsLeft = 18-age;
    console.log(`${firstName}is too young. Wait another ${yearsLeft} years 😊 `);
}

// Example 2
const birthYear = 1895;
let century;
if(birthYear<=2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);
