function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitPrecessor (apples, oranges) {

    // calling cutFruitPieces function inside the fruitPrecessor function
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    console.log(juice);
    return juice;
}
fruitPrecessor(6,8);

// calling function and taking decision
const calcAge= function(birthYear){
    const currentYear = 2037;
    return currentYear - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65-age;
    
    if(retirement>0){
        console.log (`${firstName} retires in ${retirement} years`)
        return retirement;
    }else{
        console.log(`${firstName} has already retired 🎉`)
        return -1;    // return statement immediately exit the function that means if we return anything after the return it will not considered
    }
}

console.log(yearsUntilRetirement(1991,'Vinay'));
console.log(yearsUntilRetirement(1960,'Gourav'));