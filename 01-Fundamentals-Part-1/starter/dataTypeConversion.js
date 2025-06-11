// Type Conversion(Explicit Conversion)--------->When we convert value of one data type to another data type manually using inbuild function is known as Type Conversion(Explicit Conversion)

const inputYear = '1991';
// converted to a number
console.log(Number(inputYear),inputYear);
console.log(inputYear+18);
console.log(Number(inputYear)+18);

console.log(Number('Jonas'));

//number to string
console.log(String(32));


// Type coercion(Implicit Conversion)---->When JavaScript automatically converts one data type to other automatically known as type coercion or Implicit Conversion
console.log('I am Vinay '+30+' years old');
console.log('23' - '10' -3);
console.log('23'+'10' +3);
console.log('20'*'2');
console.log('20'/'2');

let n ='1'+ 1; // '11'
n = n-1; //'11'-1
console.log(n);