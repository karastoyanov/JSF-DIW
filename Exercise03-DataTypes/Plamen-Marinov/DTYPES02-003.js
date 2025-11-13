/*
DTYPES02-003: Make a program to add one variable of type Number with a small value and 
one variable of type BigInt also with a small value. Print the type of the result and the 
result on the console.
*/

let num = 1;
let big = 2n;

let result = num + big;

console.log(typeof result);
console.log(result);