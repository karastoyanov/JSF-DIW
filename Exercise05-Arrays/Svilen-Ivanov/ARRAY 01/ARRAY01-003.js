/*
ARRAY01-003: Write a program to find the difference between the maximum element and
the minimum element from a one-dimensional array.
*/

const arr = [51, 14, 96, 3 , -8, 10, -16];
let smallestNum = Number.MAX_SAFE_INTEGER;
let biggestNum = Number.MIN_SAFE_INTEGER;

for (let i = 0; i <= arr.length; i++) {
    if (smallestNum >= arr.at(i)) {
        smallestNum = arr.at(i);
    }
}

for (let i = 0; i <= arr.length; i++) {
    if (biggestNum <= arr.at(i)) {
        biggestNum = arr.at(i);
    }
}

console.log(`${biggestNum - smallestNum}`);