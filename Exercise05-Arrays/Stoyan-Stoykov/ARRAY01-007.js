/**
 * ARRAY01-007: Write a program to print the positive even elements, greater than a certain
const value from one-dimensional array.
 */

const Value = -5;
let arr = [1, 20, 3, 50, 3, 2, 1, 11, -3];
console.log(arr);

for (const num of arr) {
  if (num > Value && num % 2 == 0 && num > 0) console.log(num);
}
