// Array A has N elements. The two-dimensional array B has N x N size. Check if 
// the array A matches any of the columns in array B. Print the column number if matches, 
// otherwise – print “no match with the columns”

const array = [3, 45, -7, 0];
const twoD = [
    [-34, 78, 3, -99],
    [12, 45, 45, 88],
    [3, 77, -7, 61],
    [-123, 89, 0, 0]
];

const rows = twoD.length;
const cols = twoD[0].length;
let matching = -1;

for (let col = 0; col < cols; col++) {
    const helpArr = [];

    for (let row = 0; row < rows; row++) {
        helpArr.push(twoD[row][col]);
    }

    if (array.toString() === helpArr.toString()) {
        matching = col;
        break;
    }
}

// print result AFTER the loop
if (matching !== -1) {
    console.log(`There is a match in column number ${matching}.`);
} else {
    console.log("No match with the columns");
}