/**
 * DTYPES02-002: Try to re-write the following fragment of code:
 * to calculate x properly.
 * HINT: work with integer numbers and then use the right number of decimals
 */

// let x = 0.12 + 0.21;
// console.log(x); //x = 0.32999999999999996

let x = (0.12 * 100 + 0.21 * 100) / 100;
console.log(x); //x = 0.33

let text = '123456';
let n = (text.match(/0/g) || '').length;

console.log(n);
