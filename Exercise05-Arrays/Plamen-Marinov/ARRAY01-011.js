/*
ARRAY01-011: Find the maximum elements from each row in two-dimensional array.
*/

const twoDimArr = [[76, 23, 1], [-2, 112, 24], [90, 91, -33], [7, 1, 18]];

for (let i = 0; i < twoDimArr.length; i++) {

    let maxElement = twoDimArr[i][0];

    for (let k = 1; k < twoDimArr[i].length; k++) {
      if (twoDimArr[i][k] > maxElement) {
        maxElement = twoDimArr[i][k];
      }
    }

    console.log(`The maximum element from row ${i} is ${maxElement}.`);
}