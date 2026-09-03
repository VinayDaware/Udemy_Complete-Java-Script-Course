// declaring variables for each values
let fruit1 ='orange';
let fruit2 = 'Banana';
let fruit3 = 'Mango';

// storing aal values in single variable by declaring Arrays
// Arrays is a special variable for that can hold multiple values in single variable

let fruits = ['Orange','Banana','Mangos'];  // stores multiple values in single variable using Array
console.log (fruits);

// Ways of declaring Arrays
// 1. Declaring array using [] brackets
let colors = ['Black','Blue','Yellow','Red'];
console.log(colors);

// 2. Delaring Array using Array constructor
let newColors = new Array ('Black','Blue','Yellow','Red');
console.log(newColors);

// Accessing array elements frmom array
let arrayElement = colors[1];
console.log(arrayElement);

arrayElement = colors[2];
console.log(arrayElement);

// Getting length or size of an array.
// using length property we can get an size of an array.

let arrayLength = colors.length;
console.log(arrayLength);

// getting last name element of an array
let elementName = colors[colors.length-2];
console.log(elementName);

// modifying array or adding element in array in place of existing array
// We can modify the array which is declared with const because array is not primitive data type but we can not modify whole array.

const friends = ['Ramesh','Shramesh','Gaurav','Nehal'];
console.log(friends);

// changing Shramesh to Kartik
friends[1] = 'Kartik';
console.log(friends);

// Holding multiple types of data in an array.
// Array can hold any data type also array can hold an array inside the array 
const firstName = 'Vinay';
const vinay = [firstName,'Daware',29,friends]
// breakdown Daware is string , 29 is number,friends is an array
console.log (vinay); 
// Output --- > Browser console ===> ['Vinay','Daware',29,Array(4)]   Terminal ===> ['Vinay','Daware',29,[ 'Ramesh', 'Kartik', 'Gaurav', 'Nehal' ]]



// Exercise of an array -- passing values from years array to function
const calcAge = function (birthYear){
    return 2037 - birthYear
};
const years = [1990,1996,1991,1967,2002,2010,2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1,age2,age3);

const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])];
console.log(ages);










