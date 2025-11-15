"use strict"
/* 
LOOPS01-007: Write a program to count the number of vowels (гласни) in a given string using 
for loop and if-else.
*/

let text = 'The quick brown fox';
let count = 0;

for (let i = 0; i < text.length; i++) {
  let letter = text[i].toLowerCase();

  switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      count++;
      break;
  }
}

console.log(count);