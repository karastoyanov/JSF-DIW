"use strict"
/*
BASICS02-008: Declare five variables. Assign them with the randomly chosen emoji 
characters. Print the UNICODE codes in hex format on the console – on different lines.
*/

let emojiOne = String.fromCodePoint(0x1F601);
let emojiTwo = String.fromCodePoint(0x1F60A);
let emojiThree = String.fromCodePoint(0x1F63A);
let emojiFour = String.fromCodePoint(0x2705);
let emojiFive = String.fromCodePoint(0x2744);

console.log(emojiOne.codePointAt(0).toString(16));
console.log(emojiTwo.codePointAt(0).toString(16));
console.log(emojiThree.codePointAt(0).toString(16));
console.log(emojiFour.codePointAt(0).toString(16));
console.log(emojiFive.codePointAt(0).toString(16));