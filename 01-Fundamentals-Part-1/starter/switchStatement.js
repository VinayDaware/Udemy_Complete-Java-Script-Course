// The switch statement in JS is used to perform different actions based on conditions.Its a alternative for if else statement. It does  the strict comparison
const day = 'Saturday';
switch(day){
    case 'Monday':
        console.log("First day of office after weekend");
        break;
    case 'Tuesday':
        console.log("Second day of office after weekend");
        break;
    case 'Wednesday':
        console.log("Midweek Vibes");
        break;
    case 'Thursday':
        console.log("One day left for weekend");
        break;
    case 'Friday':
        console.log("Last day of office week");
        break;
    case 'Saturday':
    case 'Sunday' :
        console.log("Hurreehhhh It's weekend");
        break;
    default :
    console.log ("Please enter valid day");
}

// Key Points - 
// 1. Case acts as if 
// 2. default acts as else
// 3. Breaks stops the switch from falling through the next case. If we did not specify break then it will execute next case without breaking true condition.