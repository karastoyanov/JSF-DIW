/*
LOOPS01-010: Write a program to check if a given number is prime (divisible only by 1 and 
itself).
*/

let number = 97;
let isPrime = true;

if (number < 2) {
  isPrime = false;
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(number + " is a prime number.");
} else {
  console.log(number + " is not a prime number.");
}