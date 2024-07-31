/* Write a program to find the difference between the maximum element and the minimum element from a one-dimensional array. */

const array = [3, 1, 4, 8, 5, 9, 2, 6, 5, 3, 5];

let maxElement = array[0];
let minElement = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] > maxElement) {
        maxElement = array[i];
    }
    if (array[i] < minElement) {
        minElement = array[i];
    }
}

const difference = maxElement - minElement;

console.log(`The difference between the maximum and minimum elements in the array is: ${difference}`);
