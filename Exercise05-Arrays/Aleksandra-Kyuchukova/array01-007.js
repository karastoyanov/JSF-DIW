"use strict"
/* 
ARRAY01-007: Write a program to print the positive even elements, greater than a certain 
const value from one-dimensional array.
*/

const arr = [9, -1, 3, 0, 5, 6, 4, -5];
const value = 3;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 === 0 && arr[i] > value) {
    console.log(arr[i]);
  }
}


