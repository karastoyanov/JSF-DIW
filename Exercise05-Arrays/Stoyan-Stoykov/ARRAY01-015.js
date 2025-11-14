/**
 * ARRAY01-015: From a given table, find the column with the largest sum of its elements.
 */

const arr = [
  [1, 2, 3],
  [10, 20, 30],
  [4, 5, 6]
];
console.table(arr);

const rows = arr.length;
const cols = arr[0].length;

let maxSum = -Infinity;
let maxColIndex = -1;

for (let j = 0; j < cols; j++) {
  let sum = 0;
  for (let i = 0; i < rows; i++) {
    sum += arr[i][j];
  }
  if (sum > maxSum) {
    maxSum = sum;
    maxColIndex = j;
  }
}

console.log(`Column with largest sum: index ${maxColIndex}, sum = ${maxSum}`);
console.log("Column elements:", arr.map(row => row[maxColIndex]));
