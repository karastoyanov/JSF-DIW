
/*
BASICS02-007: Declare five variables. Assign them with the randomly chosen emoji 
characters. Print the UNICODE codes on the console – on one line, separated with 
commas and space after each comma character.
*/

let emoji1 = '😀'.codePointAt(0);
let emoji2 = '😁'.codePointAt(0);
let emoji3 = '😅'.codePointAt(0);
let emoji4 = '🤣'.codePointAt(0);
let emoji5 = '🙃'.codePointAt(0);

console.log(emoji1.toString(), emoji2.toString(), emoji3.toString(), emoji4.toString(), emoji5.toString());
