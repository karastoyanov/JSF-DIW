/**
 * DTYPES02-005: Using Number and BigInt types, define variables and perform the actions
  with each of the arithmetic operations ( + - * / ). Save the results in different variables
  and print them on the console.
 */

let num1 = 15;
let num2 = 4;

let bigInt1 = 20n;
let bigInt2 = 6n;

let sumNum = num1 + num2;
let diffNum = num1 - num2;
let prodNum = num1 * num2;
let quotNum = num1 / num2;

console.log(`Number Operations:`);
console.log(`Sum: ${sumNum} type: ${typeof sumNum}`);
console.log(`Difference: ${diffNum}`);
console.log(`Product: ${prodNum}`);
console.log(`Quotient: ${quotNum}`);

let sumBigInt = bigInt1 + bigInt2;
let diffBigInt = bigInt1 - bigInt2;
let prodBigInt = bigInt1 * bigInt2;
let quotBigInt = bigInt1 / bigInt2;

console.log(`\nBigInt Operations:`);
console.log(`Sum: ${sumBigInt} type: ${typeof sumBigInt}`);
console.log(`Difference: ${diffBigInt}`);
console.log(`Product: ${prodBigInt}`);
console.log(`Quotient: ${quotBigInt}`);
