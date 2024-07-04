/*
ARRAY01-005: Write a program to print only the elements greater than or equal than a certain
value, from one-dimensional array.
*/

const arr = [2,55,34,86,33,233,-32,-5,5];

let element = arr[0];

for (let i = 1; i<arr.length; i++) {
    if (arr[i] >= 99) {
        element = arr[i];
        console.log(element);
    }
}