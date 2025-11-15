"use strict"
/*
BASICS02-005: Declare five variables. Assign them with the UNICODE codes of randomly 
chosen emoji characters. Print them on the console on one line with four spaces
between them.
*/

let emojiOne = String.fromCodePoint(0x1F601);
let emojiTwo = String.fromCodePoint(0x1F60A);
let emojiThree = String.fromCodePoint(0x1F63A);
let emojiFour = String.fromCodePoint(0x2705);
let emojiFive = String.fromCodePoint(0x2744);

console.log(emojiOne + '    ' + emojiTwo + '    ' + emojiThree + '    ' + emojiFour + '    ' + emojiFive);
