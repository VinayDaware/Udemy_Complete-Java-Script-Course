//we have 2 equality operator
// 1. = = ---> loose equality --->compares value only not Type

// here comparison will be successfull bcz here value matters not an data type

let num = '18';
let year = 1995;

if(num==18){
    console.log("Comparison successfull");
}else{
    console.log("Comparison failed");
}

if(year==1995){
    console.log("Comparison successfull");
}else{
    console.log("Comparison failed");
}





//2. === ---> Strict equality ---> compare value and its type

const age = 18;
const DOB = '1995';
if(age===18){
    console.log("Comparison successfull");
}else{
    console.log("Comparison failed");
}

// DOB is String value and here we put it as number hence the else block is executed due to failure
if(DOB===1995){
    console.log("Comparison successfull");
}else{
    console.log("Comparison failed");
}


//we have 2 inequality operator
// 1. != ---> loose inequality --->compares value only not Type




//2. !== ---> Strict inequality ---> compare value and its type
if(DOB!==1995){
    console.log("Inequality found");
}else{
    console.log("Inequality not found");
}


// here else block will execute because of 
if(num!=18){
    console.log("Inequality found");
}else{
    console.log("Inequality not found");
}