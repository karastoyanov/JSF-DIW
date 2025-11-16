// FUNCTIONS01-005: Write a function that takes a number as an argument and returns the sum 
// of its digits.

const sumDigits = input => input.toString().split('').reduce((acc, cur) => acc += Number(cur), 0);

console.log(sumDigits(12342));