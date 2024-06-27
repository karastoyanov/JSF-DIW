/*Make a program to add one variable of type Number with a small value and
one variable of type BigInt also with a small value. Print the type of the result and the
result on the console.*/

let num = 5;
let numBigInt = 10n;

let result = BigInt(num) + numBigInt;


console.log(`${typeof result}`);
console.log(result);