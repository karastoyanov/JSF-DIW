"use strict"
/*
DTYPES02-009: Use a global number method and convert the Boolean value, representing a 
not-true value to a number and print on the console the calculation of the generated 
number raised to the power of itself. Print the result on the console.
*/

let bool = null;

let result = Number(bool) ** Number(bool);

console.log(result);



