/*
ARRAY01-015: From a given table, find the column with the largest sum of its elements.
*/

const twoDimArr = [[76, 23, 1], [-2, 124, 54], [90, 91, -23], [9, -1, 88]];

let rows = twoDimArr.length;
let cols = twoDimArr[0].length;

let maxSum = Number.MIN_SAFE_INTEGER;
let colIndex = -1;

for (let i = 0; i < cols; i++) {
  let currentSum = 0;

  for (let j = 0; j < rows; j++) {
    currentSum += twoDimArr[j][i];
  }

  console.log(`The sum of column ${i} is ${currentSum}.`);

  if (currentSum > maxSum) {
    maxSum = currentSum;
    colIndex = i;
  }
}

console.log(`Column ${colIndex} has the largest sum: ${maxSum}.`);