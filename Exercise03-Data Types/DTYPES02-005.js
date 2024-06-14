/* Perform the actions with each of the arithmetic operations ( + - * / ) with Number and BigInt variables, 
 save results in different variables and print them on the console. */

let num = 22;
let bigInt = 5n;

let resultAdd = num + Number(bigInt);
let resultSub = num - Number(bigInt);
let resultMult = num * Number(bigInt);
let resultDiv = num / Number(bigInt);

console.log("Addition Result:", resultAdd); 
console.log("Subtraction Result:", resultSub); 
console.log("Multiplication Result:", resultMult); 
console.log("Division Result:", resultDiv); 
