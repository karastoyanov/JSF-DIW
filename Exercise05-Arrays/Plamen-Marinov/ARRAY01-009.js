/*
ARRAY01-009: Write a program to find the average value from one-dimensional array, filled in 
with numbers. Create a new array, having the elements from the first one but each of 
them increased with the average value.
*/

const arr = [30, 50, -10, 70, 10, 90]

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

let average = sum / arr.length;

let increased = [];

for (let i = 0; i < arr.length; i++) {
  increased.push(arr[i] + average);
}

console.log("Original array:", arr);
console.log("Average value of arr:", average);
console.log("New array (each element + average):", increased);