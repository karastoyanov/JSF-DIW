/**
 * ARRAY01-009: Write a program to find the average value from one-dimensional array, filled in
with numbers. Create a new array, having the elements from the first one but each of
them increased with the average value
 */


const arr = [10, 20, 30, 40, 50];

// Calculate average
const avg = arr.reduce((sum, n) => sum + n, 0) / arr.length;

// Map new array with elements increased by theaverage
const newArr = arr.map(n => n + avg);

console.log("Original array:", arr);
console.log("Average value:", avg);
console.log("New array:", newArr);
