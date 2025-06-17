'use strict'; // this syntax is used to activate strict mode at script level

 let hasDriversLicense = false;
 const passTest = true;

 if(passTest) hasDriversLicense = true;
 
 if(hasDriversLicense) console.log("I can drive license")

// we can not use following reserved words because strict mode reseved these words
// 1. interface
// 2. private
