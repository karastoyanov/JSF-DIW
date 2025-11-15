/* Write a program to check if a given string is a palindrome (reads the same 
string in both directions – from the beginning to the end and vice versa – the same 
string). */

// let stringPal = "neven";

let palString = "neven";
let palForward = " ";
let palBackward = " ";

for (let i = 0; i < palString.length; i++) {
    palForward += palString[i];
}
for (let i = palString.length - 1; i >= 0; i--) {
    palBackward += palString[i];
}

if (palForward === palBackward) {
    return console.log(`${palString} is a palindrome.`)
} else {
    return console.log(`${palString} is not a palindrome.`)
}
