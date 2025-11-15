// From a given N x N table, find the sum of its two main diagonals .

const table = [
    [-34, 78, 0, -99],
    [12, 45, -7, 88],
    [3, 77, 24, 61],
    [-123, 89, -94, 0]
];

let diagonal1 = 0;
let diagonal2 = 0;

const l = table.length;

for (let i = 0; i < l; i++) {
    diagonal1 += table[i][i];
    diagonal2 += table[i][l - 1 - i];
}

let diagonalSum = diagonal1 + diagonal2;

console.log(`Sum of the first diagonal is ${diagonal1}.
Sum of second diagonal is ${diagonal2}.
The total sum of both is ${diagonalSum}.`);
