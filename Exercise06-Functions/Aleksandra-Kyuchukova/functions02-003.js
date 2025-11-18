"use strict"
/* 
FUNCTIONS02-003*: Write a function that takes a nested array (an array containing arrays of 
numbers) and returns the smallest and the largest number from all the nested arrays. Try 
to solve the problem with nested functions.
*/

function theMinMaxNum(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  function findMinMaxNum(InnerArr) {
    for (let i = 0; i < InnerArr.length; i++) {
      if (InnerArr[i] < min) {
        min = InnerArr[i];
      }
      if (InnerArr[i] > max) {
        max = InnerArr[i];
      }
    }
    return [min, max];
  }

  for (let i = 0; i < arr.length; i++) {
    findMinMaxNum(arr[i]);
  }  
  return [min, max];
}

const testArr = [ [7, 2, 3], [4, -1, 6] ];
console.log(theMinMaxNum(testArr)); 