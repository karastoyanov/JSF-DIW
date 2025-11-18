/**
 * LOOPS01-010: Write a program to check if a given number is prime (divisible only by 1 and itself).
 */

let num = 59;
let prime = true;

if (num <= 1) {
  prime = false;
}

if (num % 2 === 0 || num % 3 === 0) {
  prime = false;
}

// Check divisors up to sqrt(num)
for (let i = 5; i * i <= num; i += 6) {
  if (num % i === 0 || num % (i + 2) === 0) {
    prime = false;
  }
}

console.log(`The number ${num} is ${prime ? 'prime' : 'not prime'}`);
