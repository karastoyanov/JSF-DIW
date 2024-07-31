/* Write a program to print only the elements greater than or equal to a certain value from a one-dimensional array. */

const array = [-8, 112, -250, -65, 77, 305];
const threshold = 50;

console.log(`The elements in the array greater than or equal to ${threshold} are:`);
for (let i = 0; i < array.length; i++) {
    if (array[i] >= threshold) {
        console.log(array[i]);
    }
}