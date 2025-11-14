// FUNCTIONS01-008: Write a function that calculates the average value of a numbers in array

const averageValuesArray = input => input.reduce((acc, cur) => acc += cur, 0) / input.length;

console.log(averageValuesArray([10, 20, 30, 40, 50]));