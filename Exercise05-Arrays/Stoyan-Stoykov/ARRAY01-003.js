/**
 * ARRAY01-003: Write a program to find the difference between the maximum element and
  the minimum element from a one-dimensional array.
 */

let arr = [1, 2, 3, 5, 3, 2, 1, 0];
let max = -Infinity, min = Infinity;

for (const num of arr) {
  if (num > max) max = num;
  if (num < min) min = num;
}

console.log(arr);
console.log(`Difference between max: ${max} and ${min} = ${max - min}`);
