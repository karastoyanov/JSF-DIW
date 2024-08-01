/* Write a program to create and print a one-dimensional array in reverse order. */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("The array in reverse order is:");
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}
