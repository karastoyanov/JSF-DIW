// From a given table, find the row with the biggest sum of its elements.

const table = [
    [-34, 78, 0, -99],
    [12, 45, -7, 88],
    [3, 77, 24, 61],
    [-123, 89, -94, 0]
];
let sum = 0;
let maxSum = Number.MIN_SAFE_INTEGER;
let index;

const l = table.length;

for (let i = 0; i < l; i++) {
    sum = 0;
    for (let j = 0; j < table[i].length; j++) {
        sum += table[i][j];
    } if (sum > maxSum) {
        maxSum = sum;
        index = i;
    }
}

console.log(`The row with the biggest sum is ${table[index]}.`);
console.log(`Sum of this row is equal to ${maxSum}.`);