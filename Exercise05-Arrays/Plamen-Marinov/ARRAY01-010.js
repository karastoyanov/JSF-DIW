/*
ARRAY01-010: Find the minimum elements from each column in two-dimensional array.
*/

const twoDimArr = [[76, 23, 1], [-2, 112, 24], [90, 91, -33], [7, 1, 18]];

for (let i = 0; i < twoDimArr.length; i++) {
  let minElement = Number.MAX_SAFE_INTEGER;


  for (let k = 0; k <= twoDimArr[i].length; k++) {

    if (minElement >= twoDimArr[i][k]) {
      minElement = twoDimArr[i][k];
    }
  }
  console.log(`Minimum element in column is ${minElement}.`);
}