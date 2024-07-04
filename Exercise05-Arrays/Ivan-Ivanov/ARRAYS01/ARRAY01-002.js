/*
ARRAY01-002: Write a program to find the maximum element from a one-dimensional array.
*/

const arr = [1,3,6,87,5,344];

let maxEl = arr[0];

for (let i = 1; i<arr.length; i++) {
    if (arr[i] > maxEl) {
        maxEl = arr[i];
    }
}

console.log(`The maximum elemnt is ${maxEl}`);