/* Declare a variable. Assign it with a letter from the English alphabet. Define a 
constant, named Cipher and assign it a value in the range of [3;13]. Print on the console 
the Cipher-th letter after the assigned letter to the variable. Imagine that the English 
alphabet is linked in a circle (cycle) – after Z letter follows A letter, then B etc. Example: 
if you have Cipher=4, and the given letter is 'Y', then print on the console 'C' (the fourth 
after 'Y'). */

let letter = 'V';
const Cipher = 7;
let code = letter.charCodeAt(0);
let shiftedCode = ((code - 65 + Cipher) % 26) + 65;

console.log(String.fromCharCode(shiftedCode));
