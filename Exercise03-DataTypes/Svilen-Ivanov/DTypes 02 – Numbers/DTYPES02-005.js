/*
DTYPES02-005: Using Number and BigInt types, define variables and perform the actions
with each of the arithmetic operations ( + - * / ). Save the results in diWerent variables
and print them on the console.
*/

let number = 23;
let bigNumber = 98654341313n;

let addition = BigInt(number) + bigNumber;
let substraction = BigInt(number) - bigNumber;
let multiplication = BigInt(number) * bigNumber;
let division = number / Number(bigNumber);

console.log(addition);
console.log(substraction);
console.log(multiplication);
console.log(division);