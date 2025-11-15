// Write a program to print the positive even elements, greater than 
// a certain const value from one-dimensional array.

const array = [-34, 78, 0, -99, 12, 45, -7, 88, -56, 23, 91, -12, 21, 3, 77, 24, 61, -123, 89, -94, 0];
const value = -12;
let oneLine = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] > value) {
        if (array[i] % 2 === 0) {
            if (array[i] > 0) {
                oneLine.push(array[i]);
            }
        }
    }
}

console.log(oneLine.join(", ").trim());