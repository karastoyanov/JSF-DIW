/*
FUNCTIONS01-005: Write a function that takes a number as an argument and returns the sum 
of its digits.
*/

function sumOfDigits(num) {
  return num.toString().split("").reduce(function (sum, digit) { return sum + Number(digit); }, 0);
}

console.log(sumOfDigits(1234));