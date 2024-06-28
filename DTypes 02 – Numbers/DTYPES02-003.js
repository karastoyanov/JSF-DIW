/*
DTYPES02-003: Make a program to add one variable of type Number with a small value and
one variable of type BigInt also with a small value. Print the type of the result and the
result on the console.
*/

let x = 3;
let bigX = BigInt(88);

let result = x + Number(bigX);

console.log(result);