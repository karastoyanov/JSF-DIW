/*
BASICS02-010
Declare five variables.
Assign them with the randomly chosen emoji characters.
For each of the variables - print the UNICODE code in binary, octal, decimal,
and hex format on one line, separated with comas and space after it.
*/

let emojiSmile = '☺';
let emojiHeart = '❤';
let emojiStar = '⭐';
let emojiThumbsUp = '👍';
let emojiSun = '☀';

console.log(
  emojiSmile.codePointAt(0).toString(2) + ', ' +  emojiSmile.codePointAt(0).toString(8) + ', ' +  emojiSmile.codePointAt(0) + ', ' +  emojiSmile.codePointAt(0).toString(16));

console.log(
  emojiHeart.codePointAt(0).toString(2) + ', ' +  emojiHeart.codePointAt(0).toString(8) + ', ' +  emojiHeart.codePointAt(0) + ', ' +  emojiHeart.codePointAt(0).toString(16));

console.log(
  emojiStar.codePointAt(0).toString(2) + ', ' +  emojiStar.codePointAt(0).toString(8) + ', ' +  emojiStar.codePointAt(0) + ', ' +  emojiStar.codePointAt(0).toString(16));

console.log(
  emojiThumbsUp.codePointAt(0).toString(2) + ', ' +  emojiThumbsUp.codePointAt(0).toString(8) + ', ' +  emojiThumbsUp.codePointAt(0) + ', ' +  emojiThumbsUp.codePointAt(0).toString(16));

console.log(
  emojiSun.codePointAt(0).toString(2) + ', ' +  emojiSun.codePointAt(0).toString(8) + ', ' +  emojiSun.codePointAt(0) + ', ' +  emojiSun.codePointAt(0).toString(16));