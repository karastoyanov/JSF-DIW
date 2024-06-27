/* There are given two variables initialized with numbers. Write a program to
determine which one is the greater. */

let num = 45;
let num2 = 22;

if (num > num2) {
    console.log(`Number ${num} is greater than number ${num2}.`);
} else if (num < num2) {
    console.log(`Number ${num2} is greater than number ${num}.`);
} else {
    console.log(`Numbers are equal.`);
}