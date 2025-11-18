/**
 * ARRAY01-002: Write a program to find the maximum element from a one-dimensional array.
 */

let arr = [1, 2, 3, 5, 3, 2, 1];
let max = -Infinity;

for (const num of arr) {
  if (num > max) max = num;
}

console.log(arr);
console.log("Max num: " + max);
