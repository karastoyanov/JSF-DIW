/**
 * FUNCTIONS03-002: Write a recursive function that takes a number n and returns the n-th
Fibonacci sequence number (assume that the first 2 numbers are: 0, 1).
 */

const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);

function fib2(n) {
  if (n < 2) {
    return n;
  }
  
  return fib2(n - 1) + fib2(n - 2);
}

console.log('One liner: ' + fib(10));
console.log('Function:  ' + fib2(10));
