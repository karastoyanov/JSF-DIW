
/**
 * FUNCTIONS01-003: Write a function that takes a number as an argument and returns:
    • “Fizz” if the number is divisible by 3
    • “Buzz” if the number is divisible by 5
    • “FizzBuzz” if the number is divisible by both 3 and 5
    • The number itself if it is divisible by neither
 */

const fizzBuzz = n => n % 15 === 0 ? 'FizzBuzz' : n % 3 === 0 ? 'Fizz' : n % 5 === 0 ? 'Buzz' : n;

function fizzBuzz2(n) {
  if (n % 15 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n;
}

console.log('One liner: ' + fizzBuzz(5));
console.log('Function:  ' + fizzBuzz2(30));
