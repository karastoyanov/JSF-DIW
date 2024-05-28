// Declare a variable. Assign it with a letter from the English alphabet. 
// Define a constant, named Cipher and assign it a value in the range of [3;13]. 
// Print on the console the Cipher-th letter after the assigned letter to the variable. Imagine that the English JSF-Part1-Exercises page: 6/7
// alphabet is linked in a circle (cycle) – after Z letter follows A letter, then B etc. Example:
// if you have Cipher=4, and the given letter is 'Y', then print on the console 'C' (the fourth after 'Y').

let letter = 'Y';

const Cipher = 4;

// Calculate the index of the cipher letter in the alphabet
let cipherIndex = (letter.charCodeAt(0) - 65 + Cipher) % 26;

// Convert the index back to a character
let cipherLetter = String.fromCharCode(cipherIndex + 65);

// Print the cipher letter to the console
console.log(cipherLetter); // Output: C
