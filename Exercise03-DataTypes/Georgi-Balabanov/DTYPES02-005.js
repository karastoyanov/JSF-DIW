/*
DTYPES02-005: Using Number and BigInt types, define variables and perform the actions
with each of the arithmetic operations ( + - * / ). Save the results in diWerent variables
and print them on the console
 */
let num = 3;
let bigIntNum = 2n;

let plusResult = num +Number(bigIntNum);
let minusResult = num - Number(bigIntNum);
let multyResult = num* Number(bigIntNum);
let divisionResult = num /  Number(bigIntNum);

console.log(plusResult);
console.log(minusResult);
console.log(multyResult);
console.log(divisionResult);
