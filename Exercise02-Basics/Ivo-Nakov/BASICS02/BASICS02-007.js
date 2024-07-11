/*
BASICS02-007
Declare five variables.
Assign them with the randomly chosen emoji characters.
Print the UNICODE codes on the console – on one line,
separated with commas and space after each comma character.
*/

let emojiSmile = '☺';
let emojiHeart = '❤';
let emojiStar = '⭐';
let emojiThumbsUp = '👍';
let emojiSun = '☀';

console.log(
  emojiSmile.codePointAt(0) + ', ' + emojiHeart.codePointAt(0) + ', ' +  emojiStar.codePointAt(0) + ', ' +  emojiThumbsUp.codePointAt(0) + ', ' +  emojiSun.codePointAt(0));