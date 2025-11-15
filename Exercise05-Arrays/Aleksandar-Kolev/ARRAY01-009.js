// Write a program to find the average value from one-dimensional array, filled in 
// with numbers. Create a new array, having the elements from the first one but each of 
// them increased with the average value.

const array = [-34, 78, 0, -99, 12, 45, -7, 88, -56, 23, 91, -12, 21, 3, 77, 24, 61, -123, 89, -94, 0];
const averageArr = [];
let sum = 0;
let average;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
average = sum / array.length;
console.log(`The average sum of the numbers in the array is ${Math.round(average)}.`);

for (let j = 0; j < array.length; j++) {
    averageArr.push(array[j] + Math.round(average));
}
console.log(`The new array with increased value is such:
    ${averageArr}`)