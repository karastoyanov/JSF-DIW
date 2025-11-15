// ARRAY01-018: Find the sum of all numbers in a table. Assume that the table contains only 
// numbers.

const matrix = [
    [1, 3, 5, 7],
    [6, 77, 12, 24],
    [155, 12, 123, 223],
    [30, 32, 36, 40]
];

const matrixSum = input => input.flat().reduce((acc, cur) => acc += cur, 0);

console.log(matrixSum(matrix));