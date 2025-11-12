/*
DTYPES02-012: Multiply a variable (with nine digits, initialized with the sequential numbers 
from 1 to 9) from BigInt type with a variable, initialized as a number with value 2. Print 
the result on the console.
*/

let bigIntVariable = 123456789n;
let numberVariable = 2;

console.log(bigIntVariable * BigInt(numberVariable));