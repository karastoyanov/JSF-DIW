let letter = "V";
const CIPHER = 10;

// Get ASCII code
let code = letter.codePointAt(0);

// Get new code, wrapping after 'Z'
let test1 = code - 65 + CIPHER;
let test2 = (code - 65 + CIPHER) % 26;

let newCode = ((code - 65 + CIPHER) % 26) + 65;

// Convert to character
let newLetter = String.fromCodePoint(newCode);

console.log(newLetter);
