/**
 * ARRAY01-010: Find the minimum elements from each column in two-dimensional array.
 */

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 0]
];

console.table(arr);

for (let j = 0; j < arr[0].length; j++) {
  let minNumCol = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][j] < minNumCol) minNumCol = arr[i][j];
  }
  console.log(`Min num in col ${j} -> ${minNumCol}`);
}
