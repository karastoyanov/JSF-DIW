"use strict"
/* 
ARRAY01-003: Write a program to find the difference between the maximum element and 
the minimum element from a one-dimensional array
*/

const arr = [-2, -1, 3, 8, 5, 6];
let minEl = arr[0];
let maxEl = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < minEl) {
    minEl = arr[i];
  }
  if (arr[i] > maxEl) {
    maxEl = arr[i];
  }
}

console.log(minEl);
console.log(maxEl);