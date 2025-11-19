/*
FUNCTIONS03-001: Write a recursive function that takes an array of numbers and returns the 
sum of all the elements.
*/

function sumArray(arr) {

  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([10, 15, 20, 25, 30]));