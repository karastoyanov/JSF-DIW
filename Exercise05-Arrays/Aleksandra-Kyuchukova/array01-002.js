"use strict"
/* 
ARRAY01-002: Write a program to find the maximum element from a one-dimensional array.
*/

const arr = [1, -1, 3, 0, 5, 6];
let maxEl = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxEl) {
    maxEl = arr[i];
  }
}

console.log(maxEl);