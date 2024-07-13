/*
BASICS02-008
Declare five variables.
Assign them with the randomly chosen emoji characters.
Print the UNICODE codes in hex format on the console – on diWerent lines.
*/

let emojiSmile = '☺';
let emojiHeart = '❤';
let emojiStar = '⭐';
let emojiThumbsUp = '👍';
let emojiSun = '☀';

console.log(emojiSmile.codePointAt(0).toString(16));
console.log(emojiHeart.codePointAt(0).toString(16));
console.log(emojiStar.codePointAt(0).toString(16));
console.log(emojiThumbsUp.codePointAt(0).toString(16));
console.log(emojiSun.codePointAt(0).toString(16));