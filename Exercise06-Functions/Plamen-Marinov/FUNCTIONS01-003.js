/*
FUNCTIONS01-003: Write a function that takes a number as an argument and returns:
• “Fizz” if the number is divisible by 3
• “Buzz” if the number is divisible by 5
• “FizzBuzz” if the number is divisible by both 3 and 5
• The number itself if it is divisible by neither
*/

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}


console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(7));