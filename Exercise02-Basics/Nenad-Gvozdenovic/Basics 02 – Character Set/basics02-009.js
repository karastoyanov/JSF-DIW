/*
BASICS02-009: Declare five variables. Assign them with the randomly chosen emoji 
characters. Print the UNICODE codes in decimal format on the console – on diWerent 
lines.
*/

let emoji1 = '😊'.codePointAt(0);
let emoji2 = '👍'.codePointAt(0);
let emoji3 = '😎'.codePointAt(0);
let emoji4 = '🐱‍👤'.codePointAt(0);
let emoji5 = '🎉'.codePointAt(0);

console.log(emoji1.toString(10));
console.log(emoji2.toString(10));
console.log(emoji3.toString(10));
console.log(emoji4.toString(10));
console.log(emoji5.toString(10));