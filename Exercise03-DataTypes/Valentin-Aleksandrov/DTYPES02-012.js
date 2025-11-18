/* Multiply a variable (with nine digits, initialized with the sequential numbers 
from 1 to 9) from BigInt type with a variable, initialized as a number with value 2. Print 
the result on the console */

let firstNumber = BigInt(123456789);
let firstVar = 2;

let result = firstNumber * firstVar ;

console.log(result);

// Arithmetic between a BigInt and a Number is not allowed (type conversion lose information)