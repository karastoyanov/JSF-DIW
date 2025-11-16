"use strict"
/*
FUNCTIONS01-005: Write a function that takes a number as an argument and returns the sum 
of its digits.
*/

function DigitsSum(num) {
    let numToStr = num.toString();
    let sum = 0;

    for (let digit of numToStr) {
        sum += Number(digit);
    }

    console.log(sum);
}

DigitsSum(123);
