/*
ARRAY01-004: Write a program to print only the positive elements from one-dimensional
array.
*/

const arr = [4, 0, 9, 8, 7 -19, -678, -1, 94835];
for (let i = 0; i < arr.length; i++) {
    if (arr.at(i) > 0) {
        console.log(arr.at(i));
    }
}