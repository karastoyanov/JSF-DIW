/* Write a program to find the minimum element from a one-dimensional array.*/

const array = [3, 1, 4, 8, 5, 9, 2, 6, 5, 3, 5];

let minElement = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] < minElement) {
        minElement = array[i];
    }
}    
console.log(`The minimum element in the array is: ${minElement}`);
