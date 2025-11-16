/*
FUNCTIONS02-001: Write a function that takes a nested array (an array containing arrays of 
numbers) and returns a new nested array with only the even numbers. Try to solve the 
problem with nested functions.
*/

function filterEven(arr) {

  function isEven(num) {
    return num % 2 === 0;
  }

  function filterArray(subArr) {
    let result = [];

    for (let i = 0; i < subArr.length; i++) {
      if (isEven(subArr[i])) {
        result.push(subArr[i]);
      }
    }
    return result;
  }


  let newArr = [];
  for (let j = 0; j < arr.length; j++) {
    newArr.push(filterArray(arr[j]));
  }

  return newArr;
}

console.log(filterEven([[1, 2, 3], [4, 5, 6], [7, 8]]));