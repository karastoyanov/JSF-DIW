"use strict"
/* 
ARRAY01-009: Write a program to find the average value from one-dimensional array, filled in 
with numbers. Create a new array, having the elements from the first one but each of 
them increased with the average value.
*/

const arr = [1, 2, 3, 4, 5];
let sum = 0;
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

let average = sum / arr.length;

for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i] + average);
}

console.log(newArr.join(', '));



  



