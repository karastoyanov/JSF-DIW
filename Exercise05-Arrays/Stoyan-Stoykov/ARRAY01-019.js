/**
 * ARRAY01-019: Count the even numbers in a two-dimensional array. Calculate the
percentage of this amount from the total amount of numbers in the array
 */

const arr = [
  [1, 2, 3],
  [10, 20, 30],
  [4, 5, 6]
];
console.table(arr);

let countTotal = 0;
let countEven = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    countTotal++;
    if (arr[i][j] % 2 === 0) countEven++;
  }
}

let percentage = (countEven / countTotal) * 100;

console.log(`Total Even     = ${countEven}`);
console.log(`Total Count    = ${countTotal}`);
console.log(`Percentage     = ${percentage.toFixed(2)}%`);
