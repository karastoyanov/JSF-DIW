/* Write a program that determines whether a given number is positive or
negative.*/

// Solution_1
let n = 8;

if (n < 0) {
    console.log(`${n} is negative.`);
} else if (n > 0) {
    console.log(`${n} is positive.`);
} else {
    console.log(`${n} is 0`);
}



// Solution_2
let num = 7;

switch (num) {
    case (num < 0):
         console.log(`${num} is positive.`);
    break;
    case (num > 0):
         console.log(`${num} is negative.`);
    break;
    default:
         console.log(`${num} is 0`);
    break;
    
}


// Solution_3
let x = -6;
console.log(x == 0);
console.log(x < 0);
console.log(x > 0);

switch (x == 0) {
    case (x <  0):
        console.log(`${x} is positive.`);
        break;
     case (x > 0):
            console.log(`${x} is negative.`);
            break;
     default:
           console.log(`${x} is 0`);
           break;
        }