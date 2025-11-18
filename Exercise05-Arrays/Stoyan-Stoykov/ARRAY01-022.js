/**
 * ARRAY01-022: Array A has N elements. The two-dimensional array B has N x N size. Check if
the array A matches any of the rows in array B. Print the row number if matches,
otherwise – print “no match with the rows”.
 */

const A = [1, 2, 3, 4, 5];
const N = A.length;

const B = [
  [1, 1, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 0],
  [5, 5, 5, 5, 5],
  [1, 2, 3, 4, 5],
];

let matchIndex = [];

for (let i = 0; i < B.length; i++) {
  if (B[i].length === N && B[i].every((val, idx) => val === A[idx])) {
    matchIndex.push(i);
  }
}

if (matchIndex.length !== 0) {
  console.log(`Match found at rows ${matchIndex}`);
} else {
  console.log("No match with the rows");
}
