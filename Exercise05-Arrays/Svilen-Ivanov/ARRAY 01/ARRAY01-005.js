/*
ARRAY01-005: Write a program to print only the elements greater than or equal to a certain
value, from one-dimensional array.
*/

const arr = [51, 14, 96, 3 , -8, 10, -16];
let Num = -10;

for (let i = 0; i <= arr.length; i++) {
    if (Num <= arr.at(i)) {
        console.log(arr.at(i));
    }
}
