/* Make a program to add one variable of type Number with a small value and
one variable of type BigInt also with a small value. Print the type of the result and the
result on the console. */

let typeNumber = 8.;
let typeBigInt = 89n;

let result = typeNumber + Number(typeBigInt);
console.log(result, typeof(result));