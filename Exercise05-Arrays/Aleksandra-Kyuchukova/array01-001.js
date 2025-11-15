"use strict"
/* 
ARRAY01-001: Write a program to find the minimum element from a one-dimensional array.
*/

const arr = [1, -1, 3, 0, 5, 6];
let minEl = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < minEl) {
    minEl = arr[i];
  }
}

console.log(minEl);