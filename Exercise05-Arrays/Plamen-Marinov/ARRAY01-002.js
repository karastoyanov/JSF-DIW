/*
ARRAY01-002: Write a program to find the maximum element from a one-dimensional array.
*/

const arr = [50, 122, 381, 11, 99];

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);