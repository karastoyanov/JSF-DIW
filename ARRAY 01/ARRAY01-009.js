/*
ARRAY01-009: Write a program to find the average value from one-dimensional array, filled in
with numbers. Create a new array, having the elements from the first one but each of
them increased with the average value.
*/

const arr = [-5, 60, 86, -96, 66, 35, 862, 0];
const arrWithAvg = [];
let sum = 0;
let average;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

if (sum != 0) {
    average = sum / arr.length;
    console.log(`The average of all numbers in the array is ${average}.`);
}
else {
    console.log(`The average of all numbers in the array is zero.`)
}

for (let j = 0; j < arr.length; j++) {
    arrWithAvg.push(arr[j] + average);
}
console.log(arrWithAvg);