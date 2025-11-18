"use strict"
/*
DTYPES02-005: Using Number and BigInt types, define variables and perform the actions 
with each of the arithmetic operations ( + - * / ). Save the results in different variables 
and print them on the console
*/

let num1 = 5;
//let num2 = 3;
let bigInt1 = 5n;
//let bigInt2 = 3n;

let sumNum = num1 + Number(bigInt1);
let diffNum = BigInt(num1) - bigInt1;
let productNum = BigInt(num1) * bigInt1;
let divisionNum = num1 / Number(bigInt1);

console.log(`Sum: ${sumNum}`);
console.log(`Substraction: ${diffNum}`);
console.log(`Product: ${productNum}`);
console.log(`Division: ${divisionNum}`);

/*
let sumNum = num1 + num2;
let diffNum = num1 - num2;
let productNum = num1 * num2;
let divisionNum = num1 / num2;

let sumBigInt = bigInt1 + bigInt2;
let diffBigInt = bigInt1 - bigInt2;
let productBigInt = bigInt1 * bigInt2;
let divisionBigInt = bigInt1 / bigInt2;

// actions with Number
console.log(`Sum: ${sumNum}`);
console.log(`Substraction: ${diffNum}`);
console.log(`Product: ${productNum}`);
console.log(`Division: ${divisionNum}`);
// actions with BigInt 
console.log(`Sum: ${sumBigInt}`);
console.log(`Substraction: ${diffBigInt}`);
console.log(`Product: ${productBigInt}`);
console.log(`Division: ${divisionBigInt}`);
*/

