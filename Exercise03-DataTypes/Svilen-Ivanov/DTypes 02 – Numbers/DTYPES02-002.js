/*
DTYPES02-002: Try to re-write the following fragment of code:
let x = 0.12 + 0.21;
console.log(x); //x = 0.32999999999999996
to calculate x properly.
HINT: work with integer numbers and then use the right number of decimals.
*/


let x = 0.12 + 0.21;

console.log(x.toFixed(2));