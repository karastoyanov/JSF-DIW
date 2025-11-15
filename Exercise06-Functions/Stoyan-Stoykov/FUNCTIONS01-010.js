/**
 * FUNCTIONS01-010: Write a function that takes an array as an argument and returns a new
array with all false values removed
 */

const removeFalse = arr => arr.filter(Boolean);

function removeFalse2(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  
  return result;
}

console.log('One liner: ' + removeFalse([0, 1, false, 2, '', 3, null, 4, undefined, 5, NaN]));
console.log('Function:  ' + removeFalse2([0, 1, false, 2, '', 3, null, 4, undefined, 5, NaN]));
