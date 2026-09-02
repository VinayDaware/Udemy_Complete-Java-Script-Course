// for loop keep running while condition is true once condition becomes false it stops execution.

for (rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
}

// Calculating ages and storing to an array
const years = [1995, 1994, 2000, 2008, 2013, 2006];
const length = years.length;
const ages = []
for (let i = 0; i < length - 1; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);