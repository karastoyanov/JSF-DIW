/*
FUNCTIONS01-010: Write a function that takes an array as an argument and returns a new 
array with all false values removed.
*/

function removeFalsyValues(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (value !== false && value !== 0 && value !== "" && value !== null && value !== undefined && !Number.isNaN(value)) {
      result.push(value);
    }
  }

  return result;
}

console.log(removeFalsyValues([true, false, 1, 0, "argument", "", null, undefined, NaN]));