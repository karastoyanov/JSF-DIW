"use strict"
/* 
ARRAY01-019: Count the even numbers in a two-dimensional array. Calculate the 
percentage of this amount from the total amount of numbers in the array.
*/

const arr = [
  [1, 2, 3], 
  [4, 3, 6], 
  [7, 8, 0]
];

let countAll = 0;
let countEven = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    countAll++;
    if (arr[i][j] % 2 === 0) {
      countEven++;
    }
  }
}

let per = (countEven / countAll) * 100;

console.log(`Percent even numbers: ${per.toFixed(2)}`);
