"use strict"
/* 
LOOPS01-011: Write a program to check if a given string is a palindrome (reads the same 
string in both directions – from the beginning to the end and vice versa – the same 
string).
*/

let text = 'abba';
let reversed = '';

for (let i = text.length - 1; i >= 0; i--) {
  reversed += text[i];
}

if (text === reversed) {
  console.log(`The string ${text} is a palindrome`);
} else {
  console.log(`The string ${text} is not a palindrome`);
}