// BASICS02-015
let letter = 'Y';
const Cipher = 4;

let newPosition = (letter.charCodeAt(0) - 'A'.charCodeAt(0) + Cipher) % 26;

let resultLetter = String.fromCharCode('A'.charCodeAt(0) + newPosition);

console.log(resultLetter);