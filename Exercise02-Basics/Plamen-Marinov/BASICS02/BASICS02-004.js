/*
BASICS02-004: Declare five variables. Assign them with the UNICODE codes of randomly 
chosen emoji characters. Print them on the console – on different lines.
*/

let emoji1 = "0x1F600";
let emoji2 = "0x1F601";
let emoji3 = "0x1F602";
let emoji4 = "0x1F603";
let emoji5 = "0x1F604";

console.log(String.fromCodePoint(emoji1));
console.log(String.fromCodePoint(emoji2));
console.log(String.fromCodePoint(emoji3));
console.log(String.fromCodePoint(emoji4));
console.log(String.fromCodePoint(emoji5));