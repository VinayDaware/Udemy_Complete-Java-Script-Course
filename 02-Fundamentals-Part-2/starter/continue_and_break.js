console.log('***************continue*******************');

// Continue --> it is used to skips the remaining code ofthe current iteration and moves to next iteartion

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);   // here 5 will be skips and remaining values will be printed.
}


// problem statement ==> print positive numbers only from array
console.log('-------PRINTING POSITIVE NUMBERS FROM ARRAY--------');
const numbers = [10, 200, -55, 30, -66, 88, -99, 74, -89];
const length = numbers.length;
for (let i = 0; i < length; i++) {
    if (numbers[i] < 0) {
        continue;
    }
    console.log(numbers[i]);
}


// problem statement ==> printing string values from array
console.log('-------PRINTING STRINGS FROM ARRAY--------');
const array = [20, 25, 'Vinay', 35, 'Daware'];
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'string') {
        continue;
    }
    console.log(array[i], typeof array[i]);
}

// Problem statement ==> skips failes student and prints only pass student
console.log('-------PRINTING PASS STUDENTS--------');
const marks = [55, 35, 12, 34.5, 100, 99, 88, 96, 90];
for (let i = 0; i <= marks.length - 1; i++) {
    if (marks[i] < 35) {
        continue;
    }
    console.log(marks[i]);
}

console.log('***************break*******************');
//break is used to terminate an execution of loop from further execution once condition is satisfied

// problem statement --> break loop once found 7 and print numbers
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
};

// break a loop once found an number type in array
console.log('**************Break once a number is found.**************');
const data = ['Vinay', 'QA', 31, 'Systango'];
for (let i = 0; i < data.length; i++) {
    if (typeof data[i] == 'number') {
        break;
    }
    console.log(data[i]);
}

// search for values
console.log('**************Search for value.**************');
const names = ['Vinay', 'Kajal', 'Gaurav', 'Nehal', 'Ankit', 'Pranay'];
for (let i = 0; i < names.length; i++) {
    if (names[i] === 'Ankit') {
        break;
    }
    console.log(names[i]);
}