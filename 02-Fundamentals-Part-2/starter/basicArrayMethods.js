const friends = ["Gaurav","Nehal","Pranay","Kartik"];
console.log(friends);

// Iteration and access methods 

    // 1. indexOf() --> Returns the index of first match element
    console.log(friends.indexOf("Pranay"));

    // 2. includes () --> It  checks if the element is present in the array or not.If found Returns true else false
    console.log(friends.includes("Gaurav"));
    console.log(friends.includes("Natthu"));

    if(friends.includes("Pranay")){
        console.log("You have friend called Pranay");
    }else{
        console.log("You do not have Pranay in your friend list");

    };

    // 3. forEach -- > executes a function for each array element.It is usefull to iterates over to each element No Returns.
    friends.forEach(function(friends){
        console.log(friends);

    });

    // 4. map() ---> cretes a new array with the result of function. Returns new array
    const numbers = [1,2,3,4,5,6];
    console.log(numbers);
    const doubled = numbers.map(function(num){
        return num*2;
    });
    console.log(doubled);


// Modification methods 
    // 1. push() --- > method is used to add the element at the end of an array
    friends.push("Ankit");
    console.log(friends);

    // 2. unshift() ---- > this method is used to add the element at the start of an array
    friends.unshift("Ramesh");
    console.log(friends);

    // 3. pop () -- >  this method is used to remove the last element from array
    friends.pop();
    console.log(friends);

    // 4. shift() -- > this method is used to remove the first element from an array
    friends.shift();
    console.log(friends);

    // 5. splice() --- > Add or remove or replace the element from any position of an array by specifying the index of element
    const fruits = ['Apple','Banana','Mango','Orange']; 
    console.log(fruits);

    // remove element 
    fruits.splice(1,2); // It removes the element from array whose position is 1,2 indexes (banana,Mango)
    console.log(fruits);

    // add element at index 1
    fruits.splice(3,0,"Lichi"); //  here it deletes the 0 index from an array not an element and adds the Lichi at 3rd index
    console.log(fruits);

    // replace element from an array using splice
    fruits.splice(1,1,"Chicku"); //  it replaces the element from index 1.
    console.log(fruits);

    // 6. sort() -- method in JavaScript sorts the elements of an array in place and returns the sorted array.
    //  Important Notes:
    //  .sort() changes the original array.
    //  It converts elements to strings and compares UTF-16 character codes.
    //  For numbers, default sorting can be misleading:

    friends.sort(); //  here the sort method sorted the array element in alphabetical or ascending order
    console.log(friends);

    // 7. remerse () --- > this method is used to reverse the array
    friends.reverse();
    console.log(friends);

// Creation and transformation

    // 1. concat() -- > used to merge two or more arrays in One
    const combined = friends.concat(fruits);
    console.log(combined)

    const combined1 = friends.concat(fruits,numbers);
    console.log(combined1);

    // 2. join () --- > converts aray in string with seperator
    const joinexample = friends.join(fruits);
    console.log(joinexample);


