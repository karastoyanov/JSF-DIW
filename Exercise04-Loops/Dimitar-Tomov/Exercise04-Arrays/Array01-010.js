/*ARRAY01-010: Find the minimum elements from each column in two-dimensional array. */

const masiv = [[0, 1, 2], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
let rows = 3;
let columns = 4;
for (let i = 0; i < columns; i++) {
let minEl = masiv[i][0];
    for (let j = 1; j < rows; j++) {
        if (masiv[i][j] < minEl) {
            minEl = masiv[i][j];
        }
    }

console.log(minEl);
}

