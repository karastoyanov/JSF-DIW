/*
BASICS02-006: Declare five variables. Assign them with the randomly chosen emoji
characters. Print the UNICODE codes on the console – on diWerent lines.
*/

let emojiOne = "😇";
let emojiTwo = "😙";
let emojiThree = "🤐";
let emojiFour = "🥵";
let emojiFive = "🎯";

console.log(Number(emojiOne.codePointAt(0)).toString(16));
console.log(Number(emojiTwo.codePointAt(0)).toString(16));
console.log(Number(emojiThree.codePointAt(0)).toString(16));
console.log(Number(emojiFour.codePointAt(0)).toString(16));
console.log(Number(emojiFive.codePointAt(0)).toString(16));

