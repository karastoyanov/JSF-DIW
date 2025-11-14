/**
 * ARRAY01-004: Write a program to print only the positive elements from one-dimensional array.
 */

let arr = [1, 2, 3, 5, 3, 2, 1, 6];
console.log(arr);

for (const num of arr) {
  if (num % 2 == 0) console.log(num);
}
