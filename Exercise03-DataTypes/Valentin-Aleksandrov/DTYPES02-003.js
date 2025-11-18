/* Make a program to add one variable of type Number with a small value and 
one variable of type BigInt also with a small value. Print the type of the result and the 
result on the console. */

let smallNumber = 5n;
let smallBigint = 5n;

console.log(typeof(smallBigint + smallNumber)); 
console.log(smallBigint + smallNumber) ;

/* Arithmetic between a BigInt and a Number is not allowed (type conversion lose 
information) */
