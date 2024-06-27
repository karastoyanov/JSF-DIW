/* Write a program to check if a given string is a palindrome (reads the same
string in both directions – from the beginning to the end and vice versa – the same
string). */

let inputString = "Was it a car or a cat I saw?";

let cleanedStr = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

let reversedStr = cleanedStr.split('').reverse().join('');

if (cleanedStr === reversedStr) {
    console.log(`"${inputString}" is a palindrome.`);
} else {
    console.log(`"${inputString}" is not a palindrome.`);
}
