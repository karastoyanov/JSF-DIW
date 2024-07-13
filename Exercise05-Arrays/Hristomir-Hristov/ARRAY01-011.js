/*
Find the maximum elements from each row in two-dimensional array. 
*/


const twoDim = [[0, 1, 2], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

let rows = 4;           // twoDim.length
let columns = 3;        // twoDim[0].length

for (let i = 0; i < rows; i++) {
    let maxEl = twoDim[i][0];
    for (let j = 1; j < columns; j++) {
        if (twoDim[i][j] > maxEl) {
            maxEl = twoDim[i][j];
        }
    }
    console.log(maxEl);
}