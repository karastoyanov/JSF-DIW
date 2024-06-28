/*
There are given two variables initialized with numbers. Write a program to
determine which one is the greater.
*/

let n1 = 77;
let n2 = 77;

if (n1 > n2) {
    console.log(`${n1} is greater than ${n2}`);
} else if (n1 < n2) {
    console.log(`${n2} is greater than ${n1}`);
} else {
    console.log(`${n1} is equal to ${n2}`);
}