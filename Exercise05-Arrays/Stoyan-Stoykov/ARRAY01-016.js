/**
 * ARRAY01-016: From a given N x N table, find the sum of its two main diagonals .
 */

const arr = [
  [1, 2, 3],
  [10, 20, 30],
  [4, 5, 6]
];
console.table(arr);

const N = arr.length;
let sumDiag1 = 0, sumDiag2 = 0;

for (let i = 0; i < N; i++) {
  sumDiag1 += arr[i][i]; // top-left to bottom-right
  sumDiag2 += arr[i][N - 1 - i]; // top-right to bottom-left
}

console.log(`Sum of diagonal 1 = ${sumDiag1}`);
console.log(`Sum of diagonal 2 = ${sumDiag2}`);
