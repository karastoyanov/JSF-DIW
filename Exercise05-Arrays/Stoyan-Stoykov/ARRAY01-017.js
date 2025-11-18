/**
 * ARRAY01-017: Find the first n-elements from Fibonacci sequence, having the first two
elements 1 and 1, and every sequential element is the sum from the previous two. Put
the elements in an array. Find their sum
 */

let fib = [1, 1];
const N = 10;

for (let i = 2; i < N; i++) {
  fib.push(fib[i - 1] + fib[i - 2]);
}

console.log(`Fibonnaci seq: ${fib}, sum: ${fib.reduce((sum, num) => sum + num, 0)}`);
