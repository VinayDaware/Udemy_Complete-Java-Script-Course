
//Function declaration

function calcAge1 (birthYear) {
    const currentYear = 2037;
    const age = currentYear - birthYear ; 
    return age;
}

// here 1991 is birthYear which is parameter of function
const age1 = calcAge1(1991);
console.log(age1);


// function expression
// function which we define without name is known as function expression.It is also known as Anonomous function

const calcAge2 = function(birthYear){
    const currentYear = 2037;
    const age = currentYear - birthYear ; 
    return age;
}
const age2 = calcAge2(1991);
console.log(age2);


//Arrow function
const calcAge3 =  birthYear => currentYear - birthYear ;