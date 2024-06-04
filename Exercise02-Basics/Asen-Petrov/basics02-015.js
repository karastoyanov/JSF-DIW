let letter = "Y";

const CIPHER = 4;


let cipheredIndex = ((letter.charCodeAt(0) - 65 + CIPHER) % 26) + 65;

let cipheredLetter = String.fromCharCode(cipheredIndex);

console.log(cipheredLetter);
