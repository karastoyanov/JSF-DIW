/*
ARRAY01-001: Write a program to find the minimum element from a one-dimensional array.
*/

const arr = [1,3,6,87,5,344];

let minEl = arr[0];

for (let i = 1; i<arr.length; i++) {
    if (arr[i] < minEl) {
        minEl = arr[i];
    }
}

console.log(`The minimum elemnt is ${minEl}`);
