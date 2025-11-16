"use strict"
/* 
FUNCTIONS02-002: Write a function that takes a nested array (an array containing arrays of 
strings) and returns a single concatenated string of all the strings in the nested arrays. Try 
to solve the problem with nested functions.
*/

function concatNextedFunc(arr) {
  function concatArr(innerArr) {
    let output = '';

    for (let k = 0; k < innerArr.length; k++) {
      output += innerArr[k];
    }
    return output;
  }

  let result = '';

  for (let i = 0; i < arr.length; i++) {
      result += concatArr(arr[i]);
  }
  return result;
}

const testArr = [ ['cat', 'dog'], ['bird', 'mouse'] ];
console.log(concatNextedFunc(testArr));