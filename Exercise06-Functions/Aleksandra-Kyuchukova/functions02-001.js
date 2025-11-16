"use strict"
/* 
FUNCTIONS02-001: Write a function that takes a nested array (an array containing arrays of 
numbers) and returns a new nested array with only the even numbers. Try to solve the 
problem with nested functions.
*/

function nestedFunc(arr) {
  function evenNumber(num) {
    return num % 2 === 0;
  }

  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const tempArr = [];
    for (let j = 0; j < arr[i].length; j++) {
        if (evenNumber(arr[i][j])) {
          tempArr.push(arr[i][j]);
        }
    }
    newArr.push(tempArr);
  }
  return newArr;
}

const testArr = [ [1, 2, 3], [4, 3, 6] ];
console.table(nestedFunc(testArr));