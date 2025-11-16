/*
FUNCTIONS03-002: Write a recursive function that takes a number n and returns the n-th 
Fibonacci sequence number (assume that the first 2 numbers are: 0, 1).
*/

function fibonacci(n) {

  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));