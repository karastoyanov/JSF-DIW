/**
 * ARRAY01-018: Find the sum of all numbers in a table. Assume that the table contains only numbers.
 */

const arr = [
  [1, 2, 3],
  [10, 20, 30],
  [4, 5, 6]
];
console.table(arr);

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
}
console.log("Total Sum = " + sum);
