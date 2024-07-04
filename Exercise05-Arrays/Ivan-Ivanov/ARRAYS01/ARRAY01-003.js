/*
ARRAY01-003: Write a program to find the difference between the maximum element and
the minimum element from a one-dimensional array.
*/

const arr = [1,3,66,32,76,555,61,3,5,66,155];

let minEl = arr[0];

for (let i = 1; i<arr.length; i++) {
    if (arr[i] < minEl) {
        minEl = arr[i];
    }
}

let maxEl = arr[0];

for (let i = 1; i<arr.length; i++) {
    if (arr[i] > maxEl) {
        maxEl = arr[i];
    }
}

let dif = maxEl-minEl;

console.log(`Minimum element is ${minEl} and Maximum element is ${maxEl}, the difference is ${dif}`);