/**
 * FUNCTIONS02-002: Write a function that takes a nested array (an array containing arrays of
strings) and returns a single concatenated string of all the strings in the nested arrays. Try
to solve the problem with nested functions.
 */

const concatNestedStrings = nested => nested.map(arr => arr.join('')).join('');

function concatNestedStrings2(nested) {
  function concatArray(arr) {
    let s = '';
    for (let i = 0; i < arr.length; i++) {
      s += arr[i];
    }

    return s;
  }

  let result = '';
  for (let i = 0; i < nested.length; i++) {
    result += concatArray(nested[i]);
  }
  
  return result;
}

console.log('One liner: ' + concatNestedStrings([['The', ' '], ['quick', ' brown fox'], [' jumped', ' over', ' a tank?!']]));
console.log('Function:  ' + concatNestedStrings2([['Max', ' '], ['Verstappen', ' '], ['is', ' '], ['the ', 'champion - 2024!']]));
