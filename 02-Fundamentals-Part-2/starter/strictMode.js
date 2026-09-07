'use strict'; // this syntax is used to activate strict mode at script level.  It catches errors and prevents unsafe coding practices

 let hasDriversLicense = false;
 const passTest = true;

 if(passTest) hasDriversLicense = true;
 
 if(hasDriversLicense) console.log("I can drive license")

// we can not use following reserved words because strict mode reseved these words
// 1. interface
// 2. private

