/*
DTYPES02-005: Using Number and BigInt types, define variables and perform the actions 
with each of the arithmetic operations ( + - * / ). Save the results in different variables 
and print them on the console.
*/

let int1 = 1000;
let big1 = 2000n;

console.log(int1 + big1);
console.log(int1 - big1);
console.log(int1 * big1);
console.log(int1 / Number(big1));   
console.log(big1 + big1);
console.log(typeof big1);