// Using Number and BigInt types, define variables and perform the actions 
// with each of the arithmetic operations ( + - * / ). Save the results in different variables 
// and print them on the console.

let x = 9;
let y = 74n;

let sum = x + Number(y);
let sub = x - Number(y);
let div = Number(y) / x;
let mult = Number(y) * x;

console.log(sum, sub, div, mult);