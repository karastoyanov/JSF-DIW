// Find the sum of all numbers in a table. 
// Assume that the table contains only numbers.

const table = [
    [-34, 78, 0, -99],
    [12, 45, -7, 88],
    [3, 77, 24, 61],
    [-123, 89, -94, 0]
];

let sum = 0;

for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[i].length; j++) {
        sum += table[i][j];
    }
}

console.log(`The sum of all numbers in the table is ${sum}.`)