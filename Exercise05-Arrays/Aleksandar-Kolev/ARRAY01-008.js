// Write a program to create and print one-dimensional array in reverse order

const array = [-34, 78, 0, -99, 12, 45, -7, 88, -56, 23, 91, -12, 21, 3, 77, 24, 61, -123, 89, -94, 0];
let revArr = [];

for (let i = 1; i <= array.length; i++) {
    revArr.push(array[array.length -i])
} 
console.log(revArr);