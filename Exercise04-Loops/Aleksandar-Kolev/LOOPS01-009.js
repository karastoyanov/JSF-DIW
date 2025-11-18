// Write a program to reverse a string.

let string = "A string to be reversed."
let reversedString = ""

for (let i = 1; i <= string.length; i++) {
    reversedString = reversedString + string[string.length - i]
}

console.log(`The sentence "${string}" in reverse is "${reversedString}".`)