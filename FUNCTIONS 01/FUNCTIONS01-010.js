/*
FUNCTIONS01-010: Write a function that takes an array as an argument and returns a new
array with all false values removed.
*/

function clearArr(arr) {
    newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] != Number.isNaN) && (arr[i] != "") && (arr[i] != false) && (arr[i] != 0)) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
    return;
}

clearArr([1, "", 4, false, 6, 0, 7]);