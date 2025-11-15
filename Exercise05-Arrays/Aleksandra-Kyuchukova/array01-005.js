"use strict"
/* 
ARRAY01-005: Write a program to print only the elements greater than or equal to a certain 
value, from one-dimensional array.
*/

const arr = [9, -1, 3, 0, 5, 6, 4, -5];
let value = 5;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= value) {
    console.log(arr[i]);
  }
}


