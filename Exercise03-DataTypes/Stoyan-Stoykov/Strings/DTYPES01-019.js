/**
 * DTYPES01-019: Print all even (четни) numbers from the string: 
 * The number 28469 is not so big.
 * Hint 1: Check the remainder of integer division by two.
 * Hint 2: Use the ternary operator.
 */

const string = 'The number 28469 is not so big.';

const evens = [];
for (let i = 0; i < string.length; i++) {
  const ch = string.substring(i, i + 1);
  const n = parseInt(ch, 10);
  Number.isInteger(n) ? (n % 2 === 0 ? evens.push(n) : null) : null;
}

console.log(evens.join(' '));
