// Array A has N elements. The two-dimensional array B has N x N size. 
// Check if the array A matches any of the rows in array B. 
// Print the row number if matches, otherwise – print “no match with the rows”.

const array = [24, 1, -123, 89, -94, 0];
const twoD = [[21, 3, 77, -34, -99, 0], [24, 61, -123, 89, -94, 0]];

const rows = twoD.length;
const cols = twoD[0].length;

let matching = -1;

for (i = 0; i < rows; i++) {
    let Match = true;

    for (let j = 0; j < cols; j++) {
        if (array[j] !== twoD[i][j]) {
            Match = false;
            break;
        }
    }

    if (Match) {
        matching = i;
        break;
    }
}

if (matching !== -1) {
    console.log(`Match at row ${matching}.`);
} else {
    console.log(`No match with the rows.`)
}