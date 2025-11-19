/*
ARRAY01-014: From a given table, find the row with the biggest sum of its elements.
*/

const twoDimArr = [[76, 23, 1], [-2, 124, 54], [90, 91, -23], [9, -1, 88]];

let maxSum = Number.MIN_SAFE_INTEGER;
let rowIndex = -1;

for (let i = 0; i < twoDimArr.length; i++) {
  let currentSum = 0;

  for (let k = 0; k < twoDimArr[i].length; k++) {
    currentSum += twoDimArr[i][k];
  }

  console.log(`The sum of row ${i} is ${currentSum}.`);

  if (currentSum > maxSum) {
    maxSum = currentSum;
    rowIndex = i;
  }
}

console.log(`Row ${rowIndex} has the biggest sum: ${maxSum}.`);