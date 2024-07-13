/*
ARRAY01-020: Count the amount of elements (numbes) in a two-dimensional array, who are
bellow a certain threshold.
*/

const arr = [[43, 95, 68, 89], [-9, 0, 84, 300], [-16, -19, -158, 222], [65, -19, 5, 53]];
let threshold = 5;
let counter = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] < threshold) {
            counter++;
        }
    }
}

console.log(`There are ${counter} numbers in the array that are bellow the threshold ${threshold}.`)

