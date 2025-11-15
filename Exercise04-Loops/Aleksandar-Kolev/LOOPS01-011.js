// Write a program to check if a given string is a palindrome 
// (reads the same string in both directions – from the beginning to the end and vice versa – the same string).

let string = "Ekitike"
let reversedString = ""

for (let i = 1; i <= string.length; i++) {
    reversedString = reversedString + string[string.length - i]
} if (string.toLowerCase() === reversedString.toLowerCase()) {
    console.log(`This "${string}" is a palindrome.`)
} else {
    console.log(`This "${string}" is NOT a palindrome.`)
}