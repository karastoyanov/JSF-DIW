/*Make a program to add one variable of type Bigint and one variable of type Number.
Print the type of the result and the result on the console.*/

let num1 = 9;
let bigIntnum = 1n;
let result = BigInt(num1) + bigIntnum;
console.log(result);