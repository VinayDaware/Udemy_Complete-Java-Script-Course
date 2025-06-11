//The conditional(Ternary) operator in JS is a concise way to write if ekse statement. It allows us to write condition in one line
// Syntax - condition ? expressionIfTrue : expressionIfFalse

//example
let age = 18;
let message = age>=18 ? "You are an adult" : "You are an minor";
console.log(message);

// works like

// if(age>=18){
//     console.log("Your are an adult");
// }else{
//     console.log("You are an minor");
// }


// Conditional opeartor works in template literals
console.log(`You are an ${age>=18?'Adult':'Minor'}`);