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

let sum = 0;
let sumEven = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
    if (arr[i][j] % 2 == 0) sumEven += arr[i][j];
  }
}

let percentage = (sumEven / sum) * 100;

console.log(`Total Sum      = ${sum}`);
console.log(`Total Sum Even = ${sumEven}`);
console.log(`Percentage     = ${percentage.toFixed(2)}%`);
