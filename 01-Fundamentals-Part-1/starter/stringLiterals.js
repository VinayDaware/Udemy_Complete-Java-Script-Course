const firstName = "Vinay";
const job = "QA Engineer";
const birthYear = 1995;
let currentYear = 2025;

const intro = "I'm "+firstName+", a "+(currentYear-birthYear)+ " years old "+job+"!";
console.log(intro);

const myIntro = `I'm ${firstName},a${currentYear-birthYear} year old ${job}!`

// Regular string example 
console.log(`Hello India`);

// normal multiline string
console.log("Just\nfor\nFun");

// Multiline string example using template literal
let multilineString = `Hello,
My name is Vinay
From Nagpur`;
console.log(multilineString);