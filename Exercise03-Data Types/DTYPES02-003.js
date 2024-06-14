/* Make a program to add one variable of type Number with a small value and
one variable of type BigInt also with a small value. Print the type of the result and the
result on the console. */

let smallNum = 10;
let bigIntNum = BigInt(20);

let result = BigInt(smallNum) + bigIntNum;

console.log(result);
console.log(typeof result);