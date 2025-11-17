"use strict"
/*
BASICS03-005: Declare three variables and assign them with three randomly selected integer 
numbers. Print on the console those two of them, which have the biggest sum. Hint: Use 
the ternary operators.
*/

let numOne = 10;
let numTwo = 4;
let numThree = 8;

let sumOne = numOne + numTwo;
let sumTwo = numTwo + numThree;
let sumThree = numOne + numThree;

let result = (sumOne > sumTwo && sumOne > sumThree)  ? `${numOne}, ${numTwo}` : (sumTwo > sumOne && sumTwo > sumThree) ? `${numTwo}, ${numThree}` : `${numOne}, ${numThree}`;

console.log(result);