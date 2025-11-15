// Make a program to add one variable of type Number with a small value and 
// one variable of type BigInt also with a small value. 
// Print the type of the result and the result on the console.

let x = 7;
let y = 77n;

let sum = x + Number(y);

console.log(`${sum} is a`, typeof(sum));