/*
ARRAY01-007: Write a program to print the positive even elements, greater than a certain
const value from one-dimensional array.
*/

const arr = [2,55,34,86,677,-22,33,233,234,-32,-5,5];

let element = arr[0];

for (let i = 1; i<arr.length; i++) {
    if ((arr[i] >= -99) && (arr[i]%2==0) && (arr[i]>0)) {
        element = arr[i];
        console.log(element);
    }
}