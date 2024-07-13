/*

Declare five variables. Assign them with the randomly chosen emoji
characters. Print the UNICODE codes in hex format on the console – on different lines.

*/

let emoji1, emoji2, emoji3, emoji4, emoji5;

emoji1 = '🫤'.codePointAt(0);
emoji2 = '🧐'.codePointAt(0);
emoji3 = '🤘'.codePointAt(0);
emoji4 = '🤙'.codePointAt(0);
emoji5 = '🤌'.codePointAt(0);

console.log(emoji1.toString(16));
console.log(emoji2.toString(16));
console.log(emoji3.toString(16));
console.log(emoji4.toString(16));
console.log(emoji5.toString(16));