/* Use a global number method and convert the Boolean value, representing a 
not-true value to a number and print on the console the calculation of the generated 
number raised to the power of itself. Print the result on the console. */

let x = 7 > 8;
let convert = Number(x);
let result = convert ** convert;

console.log(result);

