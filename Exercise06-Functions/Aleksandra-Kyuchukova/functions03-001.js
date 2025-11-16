"use strict"
/* 
FUNCTIONS03-001: Write a recursive function that takes an array of numbers and returns the 
sum of all the elements.
*/

function recursiveArrSum(arr) {
    if (arr.length === 0) {
        return 0;
    }

    return arr[0] + recursiveArrSum(arr.slice(1));
}

console.log(recursiveArrSum([4, 3, 6, 9, 10]));