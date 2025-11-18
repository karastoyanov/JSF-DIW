/**
 * ARRAY01-014: From a given table, find the row with the biggest sum of its elements.
 */

/**
 * ARRAY01-014: Find the row with the biggest sum
 */
const arr = [
  [1, 2, 3],
  [10, 20, 30],
  [4, 5, 6]
];
console.table(arr);

let maxSum = -Infinity;
let maxRowIndex = -1;

for (let i = 0; i < arr.length; i++) {
  const sum = arr[i].reduce((a, b) => a + b, 0);
  if (sum > maxSum) {
    maxSum = sum;
    maxRowIndex = i;
  }
}

console.log(`Row with biggest sum: index ${maxRowIndex}, sum = ${maxSum}`);
console.log("Row:", arr[maxRowIndex]);
