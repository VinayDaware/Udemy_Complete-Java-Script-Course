// Backward loops starts with last index and moves towards first index(0)

//looping backward through array --> problem statement --> print array values in reverse mode
const friends = ['Vinay', 'Kajal', 'Nehal', 'Gaurav'];
const length = friends.length;
for (let i = length - 1; i >= 0; i--) {
    console.log(friends[i]);
}

// why length-1 ==> the array length is 4 but last index is 3 that is 4-1 = 3 thats why we starts from length-1 so loop starts from 3 -> 0

//problem statement --> print string in reverse
console.log('***********PRINTING REVERSE STRING*************')
let str = 'Vinay';
let le = str.length;
let rev = '';
for(let i = le-1;i>=0;i--){
    rev = rev+str[i];
}
console.log(rev);