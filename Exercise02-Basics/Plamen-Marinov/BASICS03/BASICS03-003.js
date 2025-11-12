/*
BASICS03-003: Declare four variables. On two of them assign integer numbers. The third set 
with the division remainder. The fourth one set with the quotient (частното -> цялата 
част от делението). Print on the console the four variables with appropriate 
description.
*/

let num1 = 24;
let num2 = 5;
let remainder = num1 % num2;
let quotient = Math.floor(num1 / num2);

console.log("First number: " + num1);
console.log("Second number: " + num2);
console.log("Division remainder: " + remainder);
console.log("Quotient: " + quotient);