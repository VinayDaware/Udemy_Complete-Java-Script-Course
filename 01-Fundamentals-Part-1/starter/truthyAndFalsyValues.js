// Falsy Values ---> Falsy values are the values that are not exactly false but will become a false when we trying to convert them as Boolean
// There are total 6 falsy values ===> 0,'' or "",undefined,null,NaN,false
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(null));

//Truthy values ---> Values that are converted to true when we attempt to convert them to Boolean. All the values that are not an falsy values are truthy values
// Such as Non empty string,Non zero string,[] emppty array,{}empty function,function(){} any function
console.log(Boolean('hello'));
console.log(Boolean(45));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(function(){}));

//type coercion using if else statement
const money = 0;
if(money){
    console.log("Don't spend all money");
}else{
    console.log("You should get a Job!");
}

