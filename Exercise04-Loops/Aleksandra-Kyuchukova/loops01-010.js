"use strict"
/* 
LOOPS01-010: Write a program to check if a given number is prime (divisible only by 1 and 
itself).
*/

let num = 8;
let prime = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    prime = false;
    break;
  }
}

if (prime) {
  console.log(`Number ${num} is prime`);
} else {
  console.log(`Number ${num} is not prime`);
}