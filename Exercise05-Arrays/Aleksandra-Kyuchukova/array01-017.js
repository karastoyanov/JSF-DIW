"use strict"
/* 
ARRAY01-017: Find the first n-elements from Fibonacci sequence, having the first two 
elements 1 and 1, and every sequential element is the sum from the previous two. Put 
the elements in an array. Find their sum.
*/

const fib = [1, 1];
let n = 10;
let sum = 2;

for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    sum += fib[i];
  }

console.log(fib);
console.log(sum);
