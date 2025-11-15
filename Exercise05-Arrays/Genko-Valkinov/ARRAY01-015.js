// ARRAY01-015: From a given table, find the column with the largest sum of its elements.

const matrix1 = [
    [1, 3, 5, 7],
    [6, 77, 12, 24],
    [155, 12, 323, 223],
    [30, 32, 36, 40]
];

const biggestColumnSum = matrix => {
    let biggestSumColumn = 0;
    let biggestSum = 0;
    for (let col = 0; col < matrix[0].length; col++) {
        let currentSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            currentSum += matrix[row][col];
        }
        if (currentSum > biggestSum) {
            biggestSum = currentSum;
            biggestSumColumn = col;
        }
    }

    return `Column ${biggestSumColumn} has the biggest sum.`;
};

console.log(biggestColumnSum(matrix1));
