/*
LOOPS01-009: Write a program to reverse a string.
*/

let stringToReverse = "Test string";
let reversedString = '';

for (let i = 1; i <= stringToReverse.length; i++) {
    reversedString = reversedString + stringToReverse[stringToReverse.length-i]
}

console.log(reversedString)