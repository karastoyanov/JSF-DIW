/**
 * DTYPES02-003: Make a program to add one variable of type Number with a small value and
  one variable of type BigInt also with a small value. Print the type of the result and the
  result on the console
 */
let smallNumber = 10; // Number type
let smallBigInt = 20n; // BigInt type

let result = smallNumber + Number(smallBigInt);

console.log(typeof result);
console.log(result);
