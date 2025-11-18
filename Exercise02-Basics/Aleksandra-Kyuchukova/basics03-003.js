"use strict"
/*
BASICS03-003: Declare four variables. On two of them assign integer numbers. The third set 
with the division remainder. The fourth one set with the quotient (частното -> цялата 
част от делението). Print on the console the four variables with appropriate 
description.
*/

let numOne = 21;
let numTwo = 4;
let numThree = numOne % numTwo;
let numFour = (numOne / numTwo).toFixed(0);

console.log(`Number one: ${numOne}`);
console.log(`Number two: ${numTwo}`);
console.log(`Division remainder ${numThree}`);
console.log(`Quotient ${numFour}`);