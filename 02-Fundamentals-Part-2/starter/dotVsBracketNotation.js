const vinay = {
    firstName : 'Vinay',
    lastName : 'Daware',
    age: 2025-1995,
    job: 'QA Engineer',
    city : 'Nagpur',
    friends : ['Gaurav','Kartik','Nehal','Pranay']
    
};

// Dot notations 
console.log('Extracting elements from object using dot notation');
console.log(vinay.firstName);
console.log(vinay.lastName);
console.log(vinay.age);
console.log(vinay.friends);

// Bracket notations
console.log('Extracting elements from object using bracket notation');
console.log(vinay['firstName']);
console.log(vinay['lastName']);
console.log(vinay['age']);
console.log(vinay['friends'])

// opening prompt alert in browser and takes the input from user
const interestedIn = prompt('What do you want to know about Vinay? Choose between firstName,lastName,age,job and friends');

if(vinay[interestedIn]){
console.log(vinay[interestedIn]);
}else{
    console.log('Wrong request ❌ Choose between firstName,lastName,age,job and friends');
};

// adding new properties into the object using dot and bracket annotation
// here location and instagram is property of an object and 'Nagpur' & 'vinay_daware'
vinay.location = 'Nagpur';
vinay['instagram'] = 'vinay_daware';
console.log(vinay);


// challenge -----> print an text with dynamic value (Vinay has 4 friends, and his best friend is called Gaurav);
// console.log(vinay.firstName +" has 4 friends, and his best friend is called "+vinay.friends[0])   ---> written by me

console.log(`${vinay.firstName} has ${vinay.friends.length} friends, and his best friend is called ${vinay.friends[0]}`); //--> correct answer