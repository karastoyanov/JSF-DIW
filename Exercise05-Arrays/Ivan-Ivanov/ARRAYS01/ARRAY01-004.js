/*
ARRAY01-004: Write a program to print only the positive elements from one-dimensional
array.
*/

const arr = [1,3,6,87,5,344,-23,-455,511,-3];

let element = arr[0];

for (let i = 1; i<arr.length; i++) {
    if (arr[i] > 0) {
        element = arr[i];
        console.log(element);
    }
}