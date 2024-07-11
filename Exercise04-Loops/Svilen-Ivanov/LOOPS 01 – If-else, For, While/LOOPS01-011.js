/*
JSF-Part1-Exercises page: 13/13
LOOPS01-011: Write a program to check if a given string is a palindrome (reads the same
string in both directions – from the beginning to the end and vice versa – the same
string).
*/


let stringToReverse = "Racecar";
let reversedString = '';

for (let i = 1; i <= stringToReverse.length; i++) {
    reversedString = reversedString + stringToReverse[stringToReverse.length-i]
}


if (stringToReverse.toLowerCase() == reversedString.toLowerCase()) {
    console.log(`The string is a palindrome.`)
} else {
    console.log(`The string is NOT a palindrome.`)
}
