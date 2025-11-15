"use strict"
/* 
ARRAY01-008: Write a program to create and print one-dimensional array in reverse order.
*/

const arr = [9, -1, 3, 0, 6];
const newArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
  newArr.push(arr[i]);
}

console.log(newArr);



