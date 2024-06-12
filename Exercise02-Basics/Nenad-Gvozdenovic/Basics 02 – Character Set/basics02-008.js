/*
BASICS02-008: Declare five variables. Assign them with the randomly chosen emoji 
characters. Print the UNICODE codes in hex format on the console – on different lines
*/

let emoji1 = '😊'.codePointAt(0);
let emoji2 = '👍'.codePointAt(0);
let emoji3 = '😎'.codePointAt(0);
let emoji4 = '🐱‍👤'.codePointAt(0);
let emoji5 = '🎉'.codePointAt(0);

console.log(emoji1.toString(16));
console.log(emoji2.toString(16));
console.log(emoji3.toString(16));
console.log(emoji4.toString(16));
console.log(emoji5.toString(16));