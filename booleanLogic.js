const hasDriversLicense = true; // Variable A
const hasGoodVision = true ; // Variable B
const c = false;
const d = false;
// AND operator ---> All values should be true then only it will return true.

// it will return true because both the values are true
console.log(hasDriversLicense && hasGoodVision);  

// it will return flase because 1 value is true and other returns as false
console.log(hasDriversLicense && c);  

// OR operator ---> Any one value should be true then only it will return true.

// it will return true because one value is true and other is false
console.log(hasDriversLicense || c); 

// it will return false because both values are false
console.log(d || c); 

// Not operator -----> it will reverse the original value e.g it will convert true to false or flase to true

// it will return true because the value of c is false
console.log(!c); 

// it will return false because the value of hasGoodVision is true
console.log(!hasGoodVision); 

// if loop using AND operator

if(hasDriversLicense && hasGoodVision){
    console.log("Sarah should able to drive"); // this block will be executed because both values are true
}else{
    console.log("Someone else should drive...");
}


// if loop using OR operator
const isTired = false;
if(hasDriversLicense || isTired ){
    console.log("Wohhhoo! It's great to know"); // This block will execute becasue the value of hasDriversLicense is true
}else{
    console.log("Ohh ! Take some rest");
}

// if loop using NOT operator
if(hasDriversLicense && !isTired){
 console.log("Wohhhoo! It's great to know"); // This block will execute becasue the value of isTired converted to true
 }else{
    console.log("Ohh ! Take some rest");
}
