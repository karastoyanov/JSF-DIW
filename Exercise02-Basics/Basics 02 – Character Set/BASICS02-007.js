/*
BASICS02-007: Declare five variables. Assign them with the randomly chosen emoji
characters. Print the UNICODE codes on the console – on one line, separated with
commas and space after each comma character.
*/

let emojiOne = "😇";
let emojiTwo = "😙";
let emojiThree = "🤐";
let emojiFour = "🥵";
let emojiFive = "🎯";

console.log(Number(emojiOne.codePointAt(0)).toString(16), ", ", Number(emojiTwo.codePointAt(0)).toString(16), ", ", Number(emojiThree.codePointAt(0)).toString(16), ", ", Number(emojiFour.codePointAt(0)).toString(16), ", ",Number(emojiFive.codePointAt(0)).toString(16));

