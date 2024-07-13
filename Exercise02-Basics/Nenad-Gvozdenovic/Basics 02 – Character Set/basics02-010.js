/*
BASICS02-010: Declare five variables. Assign them with the randomly chosen emoji 
characters. For each of the variables - print the UNICODE code in binary, octal, decimal,
and hex format on one line, separated with comas and space after it.
*/

let emoji1 = '😊'.codePointAt(0);
let emoji2 = '👍'.codePointAt(0);
let emoji3 = '😎'.codePointAt(0);
let emoji4 = '🐱‍👤'.codePointAt(0);
let emoji5 = '🎉'.codePointAt(0);

console.log(emoji1.toString(2)+", "+emoji1.toString(8)+", "+emoji1.toString(10)+", "+emoji1.toString(16));
console.log(emoji2.toString(2)+", "+emoji2.toString(8)+", "+emoji2.toString(10)+", "+emoji2.toString(16));
console.log(emoji3.toString(2)+", "+emoji3.toString(8)+", "+emoji3.toString(10)+", "+emoji3.toString(16));
console.log(emoji4.toString(2)+", "+emoji4.toString(8)+", "+emoji4.toString(10)+", "+emoji4.toString(16));
console.log(emoji5.toString(2)+", "+emoji5.toString(8)+", "+emoji5.toString(10)+", "+emoji5.toString(16));