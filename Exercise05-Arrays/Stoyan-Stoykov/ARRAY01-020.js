/**
 * ARRAY01-020: Count the amount of elements (numbes) in a two-dimensional array, who are
bellow a certain threshold.
 */

const Value = 6;
const arr = [
  [1, 2, 3],
  [10, 20, 30],
  [4, 5, 6]
];
console.table(arr);

let count = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] < Value) count++;
  }
}

console.log(`Numbers below ${Value}: ${count}`);
