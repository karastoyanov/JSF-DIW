
/**
 * FUNCTIONS01-002: Write a function that takes a single number as an argument and returns
true if the number is even, and false otherwise.
 */

const isEven = n => n % 2 === 0;

function isEven2(n) {
  return n % 2 === 0;
}

console.log('One liner: ' + isEven(5));
console.log('Function:  ' + isEven2(10));
