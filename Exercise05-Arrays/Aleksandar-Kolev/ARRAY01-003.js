// Write a program to find the difference between the 
// maximum element and the minimum element from a one-dimensional array.

const array = [-34, 78, 0, -99, 12, 45, -7, 88, -56, 23, 91, -12, 21, 3, 77, 24, 61, -123, 89, -94, 0];
let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < array.length; i++) {
    if (max <= array[i]) {
        max = array[i];
    } else if (min >= array[i]) {
        min = array[i];
    }
}

let difference = max - min;

console.log(`The difference between the biggest number ${max} and the smallest numebr ${min} in the array is ${difference}.`)