/**
 * DTYPES01-020: Count the number of characters in the English word for each digit ( [0;9] ). 
    Print on the console, in different lines, and in comma separated format for each digit the 
    following - the digit, the English word and the number of letters. 
    Example:
    6, six, 3
    7, seven, 5
 */

"use strict";

const digitWords = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
];

console.log(`${0}, ${digitWords[0]}, ${digitWords[0].length}`);
console.log(`${1}, ${digitWords[1]}, ${digitWords[1].length}`);
console.log(`${2}, ${digitWords[2]}, ${digitWords[2].length}`);
console.log(`${3}, ${digitWords[3]}, ${digitWords[3].length}`);
console.log(`${4}, ${digitWords[4]}, ${digitWords[4].length}`);
console.log(`${5}, ${digitWords[5]}, ${digitWords[5].length}`);
console.log(`${6}, ${digitWords[6]}, ${digitWords[6].length}`);
console.log(`${7}, ${digitWords[7]}, ${digitWords[7].length}`);
console.log(`${8}, ${digitWords[8]}, ${digitWords[8].length}`);
console.log(`${9}, ${digitWords[9]}, ${digitWords[9].length}`);

// for (let digit = 0; digit <= 9; digit++) {
//   const word = digitWords[digit];
//   const letterCount = word.length;
//   console.log(`${digit}, ${word}, ${letterCount}`);
// }