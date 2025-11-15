"use strict"
/* 
LOOPS01-009: Write a program to reverse a string.
*/

let text = 'quick fox';
let reversed = '';

for (let i = text.length - 1; i >= 0; i--) {
  reversed += text[i];
}

 console.log(reversed);