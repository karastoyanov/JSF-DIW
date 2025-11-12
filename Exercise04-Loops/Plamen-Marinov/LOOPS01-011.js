/*
LOOPS01-011: Write a program to check if a given string is a palindrome (reads the same 
string in both directions – from the beginning to the end and vice versa – the same 
string). 
*/

let str = "level";
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

if (str === reversedStr) {
  console.log(str + " is a palindrome.");
} else {
  console.log(str + " is not a palindrome.");
}