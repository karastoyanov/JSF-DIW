/*
DTYPES02-012: Multiply a variable (with nine digits, initialized with the sequential numbers
from 1 to 9) from BigInt type with a variable, initialized as a number with value 2. Print
the result on the console.
*/

let x = 123456789n;
let y = 2;
let result = Number(x) * y;
console.log(result);