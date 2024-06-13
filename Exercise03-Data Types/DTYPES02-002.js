/* Try to re-write the following fragment of code:
let x = 0.12 + 0.21;
console.log(x); //x = 0.32999999999999996 
to calculate x properly.
HINT: work with integer numbers and then use the right number of decimals. */

let num1 = 0.12 * 100; 
let num2 = 0.21 * 100;

let numSum = num1 + num2; 

let result = numSum / 100;

console.log("Result: " + result);