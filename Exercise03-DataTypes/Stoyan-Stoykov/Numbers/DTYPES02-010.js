/**
 * DTYPES02-010: What is the result of the following arithmetic operations:
  1) NaN++
  JSF-Part1-Exercises page: 2/2
  2) NaN - NaN
  3) Infinity - Infinity
  4) 5 - true
  5) Boolean(true-true)*true
 */

let a = NaN;
let b = Infinity;

console.log(`NaN++ = ${a++}`);
console.log(`NaN - NaN = ${a - a}`);
console.log(`Infinity - Infinity = ${b - b}`);
console.log(`Boolean(true - true) * true = ${Boolean(true - true) * true}`);
