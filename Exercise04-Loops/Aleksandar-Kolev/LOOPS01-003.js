// There are given two variables initialized with numbers. Write a program to determine which one is the greater.

let x = 1234;
let y = 43571;

if (x > y) {
    console.log(`The number ${x} is greater than the number ${y}.`)
} else if (x < y) {
    console.log(`The number ${y} is greater than the number ${x}.`)
} else {
    console.log("Both numbers are equal.")
}