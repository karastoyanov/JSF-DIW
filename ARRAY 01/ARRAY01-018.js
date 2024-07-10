/*
ARRAY01-018: Find the sum of all numbers in a table. Assume that the table contains only
numbers.
*/

const arr = [[43, 95, 68, 89], [-9, 0, 84, 300], [-16, -19, -158, 222], [65, -19, 5, 53]];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}

console.log(`The sum of all numbers in the table is ${sum}.`);