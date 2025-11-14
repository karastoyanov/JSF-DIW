// ARRAY01-020: Count the amount of elements (numbes) in a two-dimensional array, who are 
// bellow a certain threshold.

const matrix = [
    [1, 3, 5, 7],
    [6, 77, 12, 24],
    [155, 12, 123, 223],
    [30, 32, 36, 40]
];

const matrixBelowThresholdCounter = (input, threshold) => input.flat().reduce((acc, cur) => cur < threshold ? acc + 1 : acc, 0);

console.log(matrixBelowThresholdCounter(matrix, 17));