/**
 * ARRAY01-013: Transpose a square matrix.
    // [БГ]: Транспониране на матрица:
    // редовете на A стават стълбове (колони) на A^T;
    // стълбовете (колоните) на A стават редове на A^T.
 */

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const N = matrix.length;
const transposed = [];

// Build transposed matrix
for (let i = 0; i < N; i++) {
  transposed[i] = [];
  for (let j = 0; j < N; j++) {
    transposed[i][j] = matrix[j][i];
  }
}

console.table(transposed);
