/* Write a program to print only the positive elements from one-dimensional array. */

const array = [-8, 112, -250, -65, 77, 305];

console.log("The positive elements in the array are:");
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        console.log(array[i]);
    }
}