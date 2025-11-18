// DTYPES02-005: Using Number and BigInt types, define variables and perform the actions 
// with each of the arithmetic operations ( + - * / ). Save the results in different variables 
// and print them on the console.


let firstNubmer = BigInt(170);
let secondNumber = BigInt(17);

let addition = firstNubmer + secondNumber;
let subtract = firstNubmer - secondNumber;
let multiplication = firstNubmer * secondNumber;
let division = firstNubmer / secondNumber;

console.log(`${firstNubmer} + ${secondNumber} = ${addition}`);
console.log(`${firstNubmer} - ${secondNumber} = ${subtract}`);
console.log(`${firstNubmer} * ${secondNumber} = ${multiplication}`);
console.log(`${firstNubmer} / ${secondNumber} = ${division}`);


// Both variables need to be parsed to BigInt otherwise it would print an error
// when we try to add them