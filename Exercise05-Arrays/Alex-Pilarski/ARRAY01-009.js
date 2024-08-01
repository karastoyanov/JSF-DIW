/* Write a program to find the average value from one-dimensional array, filled with numbers. 
Create a new array, having the elements from the first one but each of them increased with the average value. */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
const average = sum / array.length;

const newArray = [];
for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + average);
}

console.log("Original array:", array);
console.log("Average value:", average);
console.log("New array with each element increased by the average value:", newArray);
