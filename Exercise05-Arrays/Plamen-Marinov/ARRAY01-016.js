/*
ARRAY01-016: From a given N x N table, find the sum of its two main diagonals.
*/

const twoDimArr = [[76, 23, 1], [-2, 112, 24], [90, 91, -33]];

const MATRIXSIZE = twoDimArr.length;

let primarySum = 0;
let secondarySum = 0;

for (let i = 0; i < MATRIXSIZE; i++) {
  primarySum += twoDimArr[i][i];
  secondarySum += twoDimArr[i][MATRIXSIZE - 1 - i];
}

console.log("Primary diagonal sum:", primarySum);
console.log("Secondary diagonal sum:", secondarySum);
console.log("Total sum of both diagonals:", primarySum + secondarySum);