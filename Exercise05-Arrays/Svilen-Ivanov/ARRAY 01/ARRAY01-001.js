/*
ARRAY01-001: Write a program to find the minimum element from a one-dimensional array.
*/

const arr = [51, 14, 96, 3 , -8, 10, -16];
let smallestNum = Number.MAX_SAFE_INTEGER;

for (let i = 0; i <= arr.length; i++) {
    if (smallestNum >= arr.at(i)) {
        smallestNum = arr.at(i);
    }
}
console.log(`The smallest number in the array is ${smallestNum}`);