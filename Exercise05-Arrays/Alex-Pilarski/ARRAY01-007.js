/* Write a program to print the positive even elements greater than a certain constant value from a one-dimensional array. */

const array = [-8, 112, -250, -65, 77, 305];
const threshold = 50;

console.log(`The positive even elements in the array greater than ${threshold} are:`);
for (let i = 0; i < array.length; i++) {
    if (array[i] > threshold && array[i] % 2 === 0 && array[i] > 0) {
        console.log(array[i]);
    }
}
