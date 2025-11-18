/**
 * DTYPES02-009: Use a global number method and convert the Boolean value, representing a
  not-true value to a number and print on the console the calculation of the generated
  number raised to the power of itself. Print the result on the console.
 */
let boolValue = false;
let numValue = Number(boolValue);

let result = Math.pow(numValue, numValue);

console.log(`The result of ${numValue} raised to the power of ${numValue} is: ${result}`);
