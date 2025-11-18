/**
 * FUNCTIONS01-008: Write a function that calculates the average value of a numbers in array
 */

const avgArray = arr => arr.reduce((sum, n) => sum + n, 0) / arr.length;

function avgArray2(arr) {
  if (arr.length === 0) return NaN;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log('One liner: ' + avgArray([5, 7, 9, 4]));
console.log('Function:  ' + avgArray2([2, -10, -7]));
