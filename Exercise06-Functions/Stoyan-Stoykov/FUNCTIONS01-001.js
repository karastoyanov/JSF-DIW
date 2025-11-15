/**
 * FUNCTIONS01-001: Write a function that takes two numbers as arguments and returns the
largest of them.
 */

const MaxOfTwo = (a, b) => a > b ? a : b;

function maxOfTwo2(a, b) {
  return a > b ? a : b;
}

console.log('One liner: ' + MaxOfTwo(5, 10));
console.log('Function:  ' + maxOfTwo2(5, 10));
