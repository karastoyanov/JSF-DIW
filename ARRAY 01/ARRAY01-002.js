/*
ARRAY01-002: Write a program to find the maximum element from a one-dimensional array.
*/

const arr = [51, 14, 96, 3 , -8, 10, -16];
let biggestNum = Number.MIN_SAFE_INTEGER;

for (let i = 0; i <= arr.length; i++) {
    if (biggestNum <= arr.at(i)) {
        biggestNum = arr.at(i);
    }
}
console.log(`The largest number in the array is ${biggestNum}`);