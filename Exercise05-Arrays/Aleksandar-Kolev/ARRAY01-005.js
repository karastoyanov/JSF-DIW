// Write a program to print only the elements greater than 
// or equal to a certain value, from one-dimensional array.

const array = [-34, 78, 0, -99, 12, 45, -7, 88, -56, 23, 91, -12, 21, 3, 77, 24, 61, -123, 89, -94, 0];
let value = 28;
let oneLine = "";

for (let i = 0; i < array.length; i++) {
    if (array[i] >= value) {
        oneLine += array[i] + ", ";
    }
}
if (oneLine.length > 0) {
    oneLine = oneLine.slice(0, -2);
}

console.log(oneLine);