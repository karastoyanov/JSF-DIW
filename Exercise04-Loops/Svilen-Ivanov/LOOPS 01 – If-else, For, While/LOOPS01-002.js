/*
LOOPS01-002: Write a program that determines if a given number is even or odd.
 */

let x = -6;
let checkForEven = x % 2;

switch (checkForEven) {
    case 1:
        console.log(`${x} is odd`);
        break;
    case -1: //check for negative numbers
        console.log(`${x} is odd`);
        break;
    case 0:
        console.log(`${x} is even`);
        break;

};