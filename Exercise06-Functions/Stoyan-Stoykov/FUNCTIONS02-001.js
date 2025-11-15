/**
 * /**
 * FUNCTIONS02-001: Write a function that takes a nested array (an array containing arrays of
numbers) and returns a new nested array with only the even numbers. Try to solve the
problem with nested functions
 */

const filterEvenNested = nested => nested.map(arr => arr.filter(n => n % 2 === 0));

function filterEvenNested2(nested) {
  function isEven(n) {
    return n % 2 === 0;
  }
  
  return nested.map(arr => arr.filter(isEven));
}

console.log('One liner: ' + JSON.stringify(filterEvenNested([[1, 2, 3], [4, 5, 6], [7, 8, 9]])));
console.log('Function:  ' + JSON.stringify(filterEvenNested2([[10, 15, 20], [25, 30, 35], [40, 45, 50]])));
