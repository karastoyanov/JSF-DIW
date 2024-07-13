//From a given table, find the column with the largest sum of its elements.

let table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let biggestColumn = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < table.length; i++) {
    let currentColumnSum = 0;
    for (let l = 0; l < table.length; l++) {
        currentColumnSum += table[l][i];
    }
    //console.log(currentRowSum);
    if (currentColumnSum > biggestColumn) {
        biggestColumn = currentColumnSum
    }
}
console.log(biggestColumn);