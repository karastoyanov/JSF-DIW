// Write a program to print the odd elements greater than a certain const value from one-dimensional array.

const array = [-34, 78, 0, -99, 12, 45, -7, 88, -56, 23, 91, -12, 21, 3, 77, 24, 61, -123, 89, -94, 0];
const value = 33;
let oneLine = "";

for (let i = 0; i < array.length; i++) {
    if (array[i] > value) {
        if (array[i] % 2 === 1) {
            oneLine += array[i] + ", ";
        }
    }
}
if (oneLine.length > 0) {
    oneLine = oneLine.slice(0, -2);
}

console.log(oneLine);