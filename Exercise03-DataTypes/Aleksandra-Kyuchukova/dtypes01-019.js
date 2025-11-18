"use strict"
/*
DTYPES01-019: Print all even (четни) numbers from the string:
The number 28469 is not so big.
Hint 1: Check the remainder of integer division by two.
Hint 2: Use the ternary operator.
*/

let text = 'The number 28469 is not so big.';

let num1 = text[11];
let num2 = text[12];
let num3 = text[13];
let num4 = text[14];
let num5 = text[15];

num1 = num1 % 2 === 0 ? console.log(num1) : 'Not an even number';
num1 = num2 % 2 === 0 ? console.log(num2) : 'Not an even number';
num1 = num3 % 2 === 0 ? console.log(num3) : 'Not an even number';
num1 = num4 % 2 === 0 ? console.log(num4) : 'Not an even number';
num1 = num5 % 2 === 0 ? console.log(num5) : 'Not an even number';

