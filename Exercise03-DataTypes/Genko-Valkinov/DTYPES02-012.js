// DTYPES02-012: Multiply a variable (with nine digits, initialized with the sequential numbers 
// from 1 to 9) from BigInt type with a variable, initialized as a number with value 2. Print 
// the result on the console.

let firstNumber = BigInt(123456789);
let secondNumber = BigInt(2);

console.log(firstNumber * secondNumber);

// Both variables need to be parsed to BigInt otherwise it would print an error
// when we try to add them