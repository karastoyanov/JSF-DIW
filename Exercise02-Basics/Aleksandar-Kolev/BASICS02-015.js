let letter = 'H';
const Cipher = 7;
letter = letter.toUpperCase();
let position = letter.charCodeAt(0) - 65;
let newPosition = (position + Cipher) % 26;
let newLetter = String.fromCharCode(newPosition + 65);
console.log(newLetter);