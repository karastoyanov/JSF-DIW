"use strict"
/*
DTYPES02-003: Make a program to add one variable of type Number with a small value and 
one variable of type BigInt also with a small value. Print the type of the result and the 
result on the console.
*/

let var1 = 3;
let var2 = 5n;

let result = var1 + Number(var2);

console.log(result);
console.log(typeof result);