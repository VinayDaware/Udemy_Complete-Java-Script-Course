
//Function declaration - function declaration supports hoisting, we can not save function in variable

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
const currentYear = 2037;
const calcAge3 =  birthYear => currentYear - birthYear ;
const age3 = calcAge3(1991);
console.log(age3);

// calculate years of retirement
const yearsUntilRetirement = (birthYear, firstName) => {
     const currentYear = 2037;
     const age = currentYear - birthYear ;
     const retirement = 65 - age;
    // return retirement;    // whnr we have more line of code under function then we need return keyword
    return `${firstName} retires in ${retirement} years`;

}
console.log(yearsUntilRetirement(1991,'Vinay'));
console.log(yearsUntilRetirement(1985,'Ram'));

