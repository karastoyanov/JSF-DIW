/*
ARRAY01-001: Write a program to find the minimum element from a one-dimensional array.
*/

const arr = [50, 122, 38, 11, 99];

let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log(min);