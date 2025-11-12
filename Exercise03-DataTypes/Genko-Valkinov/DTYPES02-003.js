// DTYPES02-003: Make a program to add one variable of type Number with a small value and 
// one variable of type BigInt also with a small value. Print the type of the result and the 
// result on the console.

let firstNubmer = 7;
let secondNumber = 17n;

console.log(typeof (BigInt(firstNubmer) + secondNumber));
console.log(BigInt(firstNubmer) + secondNumber);

// Both variables need to be parsed to BigInt otherwise it would print an error
// when we try to add them;