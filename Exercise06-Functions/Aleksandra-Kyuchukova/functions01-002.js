"use strict"
/*
FUNCTIONS01-002: Write a function that takes a single number as an argument and returns 
true if the number is even, and false otherwise.
*/

function EvenNum(num) {
    let result = num % 2 === 0 ? console.log(`Even`) : console.log(`Odd`);
}

EvenNum(4);
EvenNum(5);