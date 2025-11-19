/*
ARRAY01-023: Array A has N elements. The two-dimensional array B has N x N size. Check if 
the array A matches any of the columns in array B. Print the column number if matches, 
otherwise – print “no match with the columns”.
*/

const arrA = [1, 4, 7];
const arrB = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let matchFound = false;

const NUMBERROWSCOLS = arrB.length;

for (let col = 0; col < NUMBERROWSCOLS; col++) {
  let isMatch = true;

  for (let row = 0; row < NUMBERROWSCOLS; row++) {
    if (arrB[row][col] !== arrA[row]) {
      isMatch = false;
      break;
    }
  }

  if (isMatch) {
    console.log(`Array A matches column ${col} of array B.`);
    matchFound = true;
    break;
  }
}

if (!matchFound) {
  console.log("no match with the columns");
}