/*

Declare five variables. Assign them with the randomly chosen emoji
characters. Print the UNICODE codes on the console – on one line, separated with
commas and space after each comma character.

*/

let emoji1, emoji2, emoji3, emoji4, emoji5;

emoji1 = '🫤'.codePointAt(0);
emoji2 = '🧐'.codePointAt(0);
emoji3 = '🤘'.codePointAt(0);
emoji4 = '🤙'.codePointAt(0);
emoji5 = '🤌'.codePointAt(0);

console.log(emoji1.toString(16) + ", " + emoji2.toString(16) + ", " + emoji3.toString(16) + ", " + emoji4.toString(16) + ", " + emoji5.toString(16));