/*
FUNCTIONS02-002: Write a function that takes a nested array (an array containing arrays of 
strings) and returns a single concatenated string of all the strings in the nested arrays. Try 
to solve the problem with nested functions.
*/

function concatString(arr) {

  function concatArray(subArr) {
    let result = "";
    for (let i = 0; i < subArr.length; i++) {
      result += subArr[i] + " ";
    }
    return result.trim();
  }

  function concatAll(nestedArr) {
    let finalResult = "";
    for (let j = 0; j < nestedArr.length; j++) {
      finalResult += concatArray(nestedArr[j]) + " ";
    }
    return finalResult.trim();
  }

  return concatAll(arr);
}

console.log(concatString([["Hello", "world"], ["this", "is"], ["nested", "arrays"]]));