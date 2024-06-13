
/*
DTYPES02-005: Using Number and BigInt types, define variables and perform the actions
with each of the arithmetic operations ( + - * / ). Save the results in diWerent variables
and print them on the console
 */
let number = 6;
let bigIntNumber = 8n;

let plusResult = number + Number(bigIntNumber);
let minusResult = number - Number(bigIntNumber);
let multyplyResult = number * Number(bigIntNumber);
let divisionResult = number / Number(bigIntNumber);

console.log(plusResult);
console.log(minusResult);
console.log(multyplyResult);
console.log(divisionResult);