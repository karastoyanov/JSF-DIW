// ARRAY01-014: From a given table, find the row with the biggest sum of its elements.

const matrix1 = [
    [1, 3, 5, 7],
    [6, 77, 12, 24],
    [155, 12, 123, 223],
    [30, 32, 36, 40]
];

const biggestRowSum = matrix => {
    let biggestSumRow = 0;
    let biggestSum = 0;

    for(let i=0; i<matrix.length; i++){
        let currentSum = 0;
        for(let j=0; j<matrix[i].length; j++){
            currentSum += matrix[i][j]; 
        } 

        if(currentSum > biggestSum){
            biggestSum = currentSum;
            biggestSumRow = i;
        }
    }

    return `Row ${biggestSumRow} has the biggest sum.`
};

console.table(biggestRowSum(matrix1));