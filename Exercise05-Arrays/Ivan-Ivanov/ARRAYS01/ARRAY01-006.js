/*
ARRAY01-006: Write a program to print the odd elements greater than a certain const value
from one-dimensional array.
*/

const arr = [2,55,34,86,677,33,233,234,-32,-5,5];

let element = arr[0];

for (let i = 1; i<arr.length; i++) {
    if ((arr[i] >= 99) && (arr[i]%2!=0)) {
        element = arr[i];
        console.log(element);
    }
}