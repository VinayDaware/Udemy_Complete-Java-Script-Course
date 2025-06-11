// 1. Arithmatic Operators
let a = 10;
let b = 3;
let firstName = "Vinay";
let lastName = "Daware";

console.log(firstName+" "+lastName); // + operator also use for concaniate String

// Addition
console.log(a+b);


// substraction
console.log(a-b);

// multiplication
console.log(a*b);

// division
console.log(a/b);

// exponential
console.log(2**4); // 2**4 means 2 to the power of 4 = 2*2*2*2 = 16

//Increment 
console.log(++a);

//decrement
console.log(--b);

// Modulus
console.log(a%b);


// 2. Assignment Operators
// A. Basic Assignment Operator
let x = 10; // = ----------> is basic assignment operator

// B. Compound Assignment Operator
//Add and assign operator
x+=5; //x + 5 = 10+5 = 15
console.log(x);
//Substract and assign operator
x-=5; // here, x = 15, so x = x - 5 = 15-5 =10
console.log(x);
//multiply and assign operator
x*=2; // here, x=10, so x = x * 2 = 20
console.log(x);

//Devide and assign operator
x/=5; // here x =20, so x = x/5 = 4
console.log(x);

//Modulus and Assign operator
x%=3; // here x=4, so x = x % 3 = 1
console.log(x);

// exponential and assign operator
x**=2; // here x = 1, so x = x**2 = 1
console.log(x);

// 3. Comparison Operators

// A. Equal to 
console.log(5=='5'); // true ----> compares value and ignores the type

//B. Atrict equal to
console.log(5==='5'); // false -----> compares value and type

//C. Not equal to
console.log(5!='5'); // false -------> compares value and ignores the type

//D. Strict not equal to 
console.log(5!=='5'); // true -------> compares value and type

//E. Greater than
console.log(8>5); // true ---------> checks if the left value is Greater than right

//F. Greater than or equal to
console.log(8>=5); // true ---------> checks if the left value is Greater than or equals to right

// G. Less than
console.log(4<9); // true --------> checks if the left value is less than right value

// H. Less than equal to
console.log(4<9); // true --------> checks if the left value is less than or equal to right value
