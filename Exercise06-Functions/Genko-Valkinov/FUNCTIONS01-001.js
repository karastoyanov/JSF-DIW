// FUNCTIONS01-001: Write a function that takes two numbers as arguments and returns the 
// largest of them.

const largestOfTwoNumbers = (a, b) => a === b ? `${a} and ${b} are equal` : a > b ? `${a} is the largest` : `${b} is the largest.`;

console.log(largestOfTwoNumbers(30, 13));