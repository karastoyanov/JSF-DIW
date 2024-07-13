let letter = "s"
let upperCase =letter <= 'Z' && letter >= 'A';
let lowerCase = letter <= 'z' && letter >= 'a';

console.log((lowerCase ? letter.toUpperCase() : '') || (upperCase ? letter.toLowerCase() : ''));