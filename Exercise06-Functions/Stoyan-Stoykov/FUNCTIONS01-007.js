/**
 * FUNCTIONS01-007: Write a function that takes three numbers as arguments and returns the
biggest sum of two of the numbers.
 */

const biggestSumOfTwo = (a, b, c) => Math.max(a + b, b + c, a + c);

function biggestSumOfTwo2(a, b, c) {
  return Math.max(a + b, b + c, a + c);
}

console.log('One liner: ' + biggestSumOfTwo(55, 5, 65));
console.log('Function:  ' + biggestSumOfTwo2(1, -10, -5));
