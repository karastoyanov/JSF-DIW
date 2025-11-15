"use strict"
/*
BASICS02-010: Declare five variables. Assign them with the randomly chosen emoji 
characters. For each of the variables - print the UNICODE code in binary, octal, decimal,
and hex format on one line, separated with comas and space after it.
*/

let emojiOne = String.fromCodePoint(0x1F601);
let emojiTwo = String.fromCodePoint(0x1F60A);
let emojiThree = String.fromCodePoint(0x1F63A);
let emojiFour = String.fromCodePoint(0x2705);
let emojiFive = String.fromCodePoint(0x2744);

console.log(emojiOne.codePointAt(0).toString(2) + `, ` + emojiOne.codePointAt(0).toString(8) + `, ` + emojiOne.codePointAt(0).toString(10) + `, ` + emojiOne.codePointAt(0).toString(16));
console.log(emojiTwo.codePointAt(0).toString(2) + `, ` + emojiTwo.codePointAt(0).toString(8) + `, ` + emojiTwo.codePointAt(0).toString(10) + `, ` + emojiTwo.codePointAt(0).toString(16));
console.log(emojiThree.codePointAt(0).toString(2) + `, ` + emojiThree.codePointAt(0).toString(8) + `, ` + emojiThree.codePointAt(0).toString(10) + `, ` + emojiThree.codePointAt(0).toString(16));
console.log(emojiFour.codePointAt(0).toString(2) + `, ` + emojiFour.codePointAt(0).toString(8) + `, ` + emojiFour.codePointAt(0).toString(10) + `, ` + emojiFour.codePointAt(0).toString(16));
console.log(emojiFive.codePointAt(0).toString(2) + `, ` + emojiFive.codePointAt(0).toString(8) + `, ` + emojiFive.codePointAt(0).toString(10) + `, ` + emojiFive.codePointAt(0).toString(16));