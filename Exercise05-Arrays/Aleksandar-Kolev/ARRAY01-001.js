// Write a program to find the minimum element from a one-dimensional array.
const array = [21, 3, 77, 24, 61, -123, 89, -94, 0];
let min = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < array.length; i++) {
    if (min >= array[i]) {
        min = array[i]
    }
}

console.log(`The smallest number in the array is ${min}.`);