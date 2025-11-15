"use strict"
/*
BASICS02-007: Declare five variables. Assign them with the randomly chosen emoji 
characters. Print the UNICODE codes on the console – on one line, separated with 
commas and space after each comma character.
*/

let emojiOne = String.fromCodePoint(0x1F601);
let emojiTwo = String.fromCodePoint(0x1F60A);
let emojiThree = String.fromCodePoint(0x1F63A);
let emojiFour = String.fromCodePoint(0x2705);
let emojiFive = String.fromCodePoint(0x2744);

console.log(emojiOne.codePointAt(0).toString(16) + `, ` + emojiTwo.codePointAt(0).toString(16) + `, ` + emojiThree.codePointAt(0).toString(16) + `, ` + emojiFour.codePointAt(0).toString(16) + `, ` + emojiFive.codePointAt(0).toString(16));
