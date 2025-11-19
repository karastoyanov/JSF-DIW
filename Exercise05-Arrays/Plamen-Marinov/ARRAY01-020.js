/*
ARRAY01-020: Count the amount of elements (numbes) in a two-dimensional array, who are 
bellow a certain threshold. 
*/

const arr = [[1171, 23, 1], [-21, 111, 21], [91, 91, -33], [7, 1, 18]];

const THRESHOLD = 20;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] < THRESHOLD) {
      count++;
    }
  }
}

console.log(`Number of element bellow threshold is: ${count}.`)