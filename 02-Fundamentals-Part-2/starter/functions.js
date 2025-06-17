'use strict';

// What is function ?
// A function is a piece of code that we can reuse in code multiple times. It same like variable but only difference is variable holds an value whereas function holds an piece of code.

function logger () {
    console.log("My name is Vinay");
}
// Calling function running or invoking function. 
logger(); // Here logger is function name.
logger();
logger();

// declaring function with input or parameters

function fruitPrecessor (apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const appleJuice = fruitPrecessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitPrecessor(2,4);
console.log(appleOrangeJuice);

