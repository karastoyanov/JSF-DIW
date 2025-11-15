"use strict"
/* 
ARRAY01-020: Count the amount of elements (numbes) in a two-dimensional array, who are 
bellow a certain threshold. 
*/

const arr = [
  [1, 2, 3], 
  [4, 3, 6], 
  [7, 8, 0]
];

let threshold = 5;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] < threshold) {
      count++;
    }
  }
}

console.log(count);
