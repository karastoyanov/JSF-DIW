/**
 * FUNCTIONS03-001: Write a recursive function that takes an array of numbers and returns the
sum of all the elements.
 */

const sumRecursive = arr => arr.length === 0 ? 0 : arr[0] + sumRecursive(arr.slice(1));

function sumRecursive2(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + sumRecursive2(arr.slice(1));
}

console.log('One liner: ' + sumRecursive([1, 2, 3, 4, 5]));
console.log('Function:  ' + sumRecursive2([10, -2, 3, 7]));
