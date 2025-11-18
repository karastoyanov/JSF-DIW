/**
 * ARRAY01-005: Write a program to print only the elements greater than or equal to a certain
  value, from one-dimensional array.
 */

const Value = 10;
let arr = [1, 20, 3, 50, 3, 2, 1, 11];
console.log(arr);

for (const num of arr) {
  if (num > Value) console.log(num);
}
