/*
ARRAY01-003: Write a program to find the difference between the maximum element and 
the minimum element from a one-dimensional array.
*/

const arr = [50, 122, 328, 11, 99];

let min = arr[0];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }

  if (arr[i] > max) {
    max = arr[i];
  }
}

let difference = (max - min);

console.log(`Minimum element in array is: ${min}`);
console.log(`Maximum element in array is: ${max}`);
console.log(`Difference between maximum and minimum element is: ${difference}`);