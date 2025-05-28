// let keyword -----> with the help of let we can declare variable that can be change later,it is block scope means only accessible in the block{}where it is declared

// example 1 - Changing value later
let age = 25;
age = 45;
console.log(age);

// example 2 - Block scope example
let firstName = "Vinay";
if(true){
    let firstName = "Paush";
    console.log(firstName);
}
console.log(firstName);

// hoisting example
//Hoisted and initialize ======> this is working only for var keyword
console.log(a);
var a =5; 

// hoisted but not initialize
// console.log(b);
// let b = 20;

// const variable example
//const ========> The const keyword is used to declare constant variable whose values can not be reassigned after declaration.Value of const can not be change.

const birthYear = 1995;

// var variable example
var job = "QA";
job = "Sr. QA";
console.log(job);

// function scope example
function testVar() {
  if (true) {
    var greeting = "Hi!";
  }
  console.log(greeting); // ✅ "Hi!" — function scoped
}


// block scope example
if (true) {
  var name = "Alice";
}
console.log(name);


