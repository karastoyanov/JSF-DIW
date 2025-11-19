/*
FUNCTIONS02-003*: Write a function that takes a nested array (an array containing arrays of 
numbers) and returns the smallest and the largest number from all the nested arrays. Try 
to solve the problem with nested functions.
*/

function findMinMaxNested(arr) {
  // Inner function: flatten the nested array into one big array
    function flatten(nestedArr) {
        let flat = [];
        for (let i = 0; i < nestedArr.length; i++) {
        flat = flat.concat(nestedArr[i]);
        }
        return flat;
    }

  // Inner function: find min and max in a flat array
    function findMinMax(flatArr) {
    let smallest = flatArr[0];
    let largest = flatArr[0];

    for (let j = 1; j < flatArr.length; j++) {
        if (flatArr[j] < smallest) {
            smallest = flatArr[j];
        }
        if (flatArr[j] > largest) {
            largest = flatArr[j];
        }
    }

    return { smallest, largest };
  }

  // Use the inner functions step by step
    const flat = flatten(arr);
    return findMinMax(flat);
}

console.log(findMinMaxNested([[10, -20], [3, 991], [42, 117]]));