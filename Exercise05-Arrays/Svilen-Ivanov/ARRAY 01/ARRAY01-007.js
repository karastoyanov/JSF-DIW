/*
ARRAY01-007: Write a program to print the positive even elements, greater than a certain
const value from one-dimensional array.
*/

const arr = [65, 87, -95, -63, -84, 0, 122, 68, 144];
const number = -86;

for (let i =0; i < arr.length; i++) {
    if ((arr[i] > number) && (arr[i] % 2 == 0) && (arr[i] > 0)) {
        console.log(arr[i]);
    }
}