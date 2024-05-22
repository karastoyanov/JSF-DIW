// BASICS02-014
let letter = 'L';
const Cipher = 4;

let base = 'A'.charCodeAt(0);
let newPosition = (letter.charCodeAt(0) - base + Cipher) % 26;
let resultLetter = String.fromCharCode(base + newPosition);

console.log(resultLetter);