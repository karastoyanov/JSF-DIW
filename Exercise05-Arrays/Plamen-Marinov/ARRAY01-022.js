/*
ARRAY01-022: Array A has N elements. The two-dimensional array B has N x N size. Check if 
the array A matches any of the rows in array B. Print the row number if matches, 
otherwise – print “no match with the rows”.
*/

const arrA = [7, 8, 9];
const arrB = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let matchFound = false;

for (let i = 0; i < arrB.length; i++) {
  let isMatch = true;

  for (let j = 0; j < arrA.length; j++) {
    if (arrB[i][j] !== arrA[j]) {
      isMatch = false;
      break;
    }
  }

  if (isMatch) {
    console.log(`Array A matches row ${i} of array B.`);
    matchFound = true;
    break;
  }
}

if (!matchFound) {
  console.log("no match with the rows");
}