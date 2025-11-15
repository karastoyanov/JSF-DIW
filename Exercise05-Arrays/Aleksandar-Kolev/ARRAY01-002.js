// Write a program to find the maximum element from a one-dimensional array.

const array = [-34, 78, 0, -99, 12, 45, -7, 88, -56, 23, 91, -12];
let max = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < array.length; i++) {
    if (max <= array[i]) {
        max = array[i]
    }
}

console.log(`The biggest number in the array is ${max}.`);