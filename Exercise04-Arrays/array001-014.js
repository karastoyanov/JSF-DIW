//From a given table, find the row with the biggest sum of its elements.

let table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let biggestRow = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < table.length; i++) {
    let currentRowSum = 0;
    for (let l = 0; l < table.length; l++) {
        currentRowSum += table[i][l];
    }
    //console.log(currentRowSum);
    if (currentRowSum > biggestRow) {
        biggestRow = currentRowSum
    }
}

console.log(biggestRow);
