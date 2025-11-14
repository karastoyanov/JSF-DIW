/**
 * ARRAY01-001: Write a program to find the minimum element from a one-dimensional array.
 */

let arr = [1, 2, 3, 5, 3, 2, 0];
let min = Infinity;

for (const num of arr) {
  if (num < min) min = num;
}

console.log(arr);
console.log("Min num: " + min);
