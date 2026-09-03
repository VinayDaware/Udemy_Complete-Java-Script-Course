// A loop inside another loop is known as Nested Loop.For each iteration of outer loop inner loop executes from begining

for (let i = 1; i <= 3; i++) {
    console.log('Outer Loop Executed : ', i);
    for (let j = 1; j <= 2; j++) {
        console.log('Inner loop executed : ', j);
    }
}


for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`Starting exercise : ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight rep : ${rep} 🏋️`);
    }
}

// Problem statement ==> print star pattern
for (let i = 1; i <= 5; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars = stars + '*';
    }
    console.log(stars);
}