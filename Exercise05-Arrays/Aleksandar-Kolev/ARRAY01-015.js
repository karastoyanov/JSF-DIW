// From a given table, find the column with the largest sum of its elements.

const table = [
    [-34, 78, 0, -99],
    [12, 45, -7, 88],
    [3, 77, 24, 61],
    [-123, 89, -94, 0]
];
let sum = 0;
let maxSum = Number.MIN_SAFE_INTEGER;
let index;

const rows = table.length;
const columns = table[0].length;
const resultColumn = [];

for (let col = 0; col < columns; col++) {
    sum = 0;
    for (let row = 0; row < rows; row++) {
        sum += table[row][col];
    } if (sum > maxSum) {
        maxSum = sum;
        index = col;
    }
}

for (let i = 0; i < rows; i++) {
    resultColumn.push(table[i][index]);
}

console.log(`The column with the biggest sum is ${resultColumn}.`);
console.log(`Sum of this column is equal to ${maxSum}.`);