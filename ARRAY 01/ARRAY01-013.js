/*
ARRAY01-013: Transpose a square matrix.
// [БГ]: Транспониране на матрица:
// редовете на A стават стълбове (колони) на AT;
// стълбовете (колоните) на A стават редове на AT
*/


const arr = [[14, 95, 68, 1], [-9, 0, 84, 2], [-16, -19, -158, 3], [99, 69, 57, 4]];

let rows = 0;
let columns = 0;
const transposedArr = [];
let counter = 0;

while (counter < arr.length) {
    const tempArr = [];
    while (rows < arr.length) {
        while (columns < arr[rows].length) {
            tempArr.push(arr[rows][columns]);
            break;
        }
        rows++;
    }
    columns++;
    transposedArr.push(tempArr);
    counter++;
    rows = 0;
}

console.log(transposedArr);
