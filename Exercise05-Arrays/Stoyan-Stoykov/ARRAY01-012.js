/**
 * ARRAY01-012: Add two N x N arrays.
  Hint: each element is the addition of the corresponding elements from both N x N arrays:
    resultArr[0,0] = A[0][0] + B[0][0]
 */

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 7]
];

const arr2 = [
  [-1, -2, -3],
  [-4, -5, -6],
  [-9, -8, -7]
];

console.table(arr);
console.table(arr2);

let resultArr = [];

for (let i = 0; i < arr.length; i++) {
  resultArr[i] = [];
  for (let j = 0; j < arr.length; j++) {
    resultArr[i][j] = arr[i][j] + arr2[i][j];
  }
}

console.table(resultArr);
