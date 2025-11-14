/**
 * ARRAY01-006: Write a program to print the odd elements greater than a certain const value
from one-dimensional array
 */

const Value = 10;
let arr = [1, 20, 3, 50, 3, 2, 1, 11];
console.log(arr);

for (const num of arr) {
  if (num > Value && num % 2) console.log(num);
}
