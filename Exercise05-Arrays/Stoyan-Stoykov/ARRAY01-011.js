/**
 * ARRAY01-011: Find the maximum elements from each row in two-dimensional array.
 */

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 7]
];

console.table(arr);

for (let i = 0; i < arr.length; i++) {
  let minNumCol = -Infinity;
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] > minNumCol) minNumCol = arr[i][j];
  }
  console.log(`Min num in col ${i} -> ${minNumCol}`);
}
