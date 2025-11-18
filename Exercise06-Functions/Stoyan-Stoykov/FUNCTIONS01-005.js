/**
 * FUNCTIONS01-005: Write a function that takes a number as an argument and returns the sum
of its digits
 */

const sumDigits = n => [...String(n)].reduce((sum, d) => sum + Number(d), 0);

function sumDigits2(n) {
  if (n < 0) n = -n;

  // Remove decimal part if there is any
  n = n - (n % 1);

  let sum = 0;
  while (n > 0) {
    // Get last digit and add to it to sum
    sum += n % 10;
    n = (n - (n % 10)) / 10;
  }

  return sum;
}

console.log('One liner: ' + sumDigits(55555));
console.log('Function:  ' + sumDigits2(10109010101));