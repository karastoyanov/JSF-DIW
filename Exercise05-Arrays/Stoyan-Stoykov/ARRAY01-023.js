/**
 * ARRAY01-022: Array A has N elements. The two-dimensional array B has N x N size. Check if
the array A matches any of the columns in array B. Print the column number if matches,
otherwise – print “no match with the columns”.
 */

const A = [1, 2, 3, 4];
const B = [
  [1, 4, 7, 1],
  [2, 5, 8, 2],
  [3, 6, 9, 3],
  [4, 6, 9, 4]
];

let matches = [];

for (let col = 0; col < B[0].length; col++) {
  let isMatch = true;

  for (let row = 0; row < B.length; row++) {

    if (B[row][col] !== A[row]) {
      isMatch = false;
      break;
    }
  }

  if (isMatch) matches.push(col);
}

if (matches.length > 0) {
  console.log(`Matches found in columns: ${matches.join(', ')}`);
} else {
  console.log("No match with the columns");
}
