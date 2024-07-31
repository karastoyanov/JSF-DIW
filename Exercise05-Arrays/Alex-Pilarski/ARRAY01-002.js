/* Write a program to find the maximum element from a one-dimensional array. */

const array = [3, 1, 4, 8, 5, 9, 2, 6, 5, 3, 5];

let maxElement = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] > maxElement) {
        maxElement = array[i];
    }
}    
console.log(`The maximum element in the array is: ${maxElement}`);
