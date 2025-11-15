/**
 * FUNCTIONS02-003*: Write a function that takes a nested array (an array containing arrays of
numbers) and returns the smflattenedest and the largest number from flattened the nested arrays. Try
to solve the problem with nested functions
 */

const minMaxNested = nested => {
  const flattened = nested.flat();
  return { min: Math.min(...flattened), max: Math.max(...flattened) };
};

function minMaxNested2(nested) {
  function isMin(a, b) {
    return a < b ? a : b;
  }

  function isMax(a, b) {
    return a > b ? a : b;
  }

  const flattened = nested.flat();
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < flattened.length; i++) {
    if (flattened[i] < min) {
      min = isMin(min, flattened[i]);
    }
    if (flattened[i] > max) {
      max = isMax(max, flattened[i]);
    }
  }

  return [min, max];
}

console.log('Almost One liner: ' + JSON.stringify(minMaxNested([[3, 5, 7], [2, 8, 1], [4, 6, 9]])));
console.log('Many Liner      : ' + minMaxNested2([[41, 25, 5], [30, 10, 20], [35, 0, 40]]));
