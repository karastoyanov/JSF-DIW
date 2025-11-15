"use strict"
/* 
ARRAY01-004: Write a program to print only the positive elements from one-dimensional array.
*/

const arr = [9, -1, 3, 0, 5, 6, 4, -5];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 0) {
    console.log(arr[i]);
  }
}


