// number data type
let a = 8965;
console.log(a);

// string data type
let firstName = "Vinay";
let lastName ="Daware";

console.log("My name is "+firstName+" My last name is "+lastName);

// boolean data type
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

 let pakIsGoodCountry = false;
 console.log(pakIsGoodCountry);

 //typeof ===> It is a special operator just like a plus or minus operator that can be used to show the type of value.
 console.log(typeof false);
 console.log(typeof 123);
 console.log(typeof "Vinay");
 console.log(typeof 'Daware');
console.log(typeof pakIsGoodCountry);

//Dynamic typing example
let x = "Hello World";
x = "hello everyone";

// undefined data type 
let myCityName;
console.log(myCityName);
console.log(typeof myCityName);
myCityName = "Nagpur";
console.log(typeof myCityName);

console.log(typeof null);  // It should return null as per the logic,but due to the bug in JS it shows object.