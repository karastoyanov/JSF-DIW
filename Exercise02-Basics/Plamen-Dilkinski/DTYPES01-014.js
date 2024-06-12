/*  DTYPES01-014: Define a string variable with the following text (called pangram):
    "The quick brown fox jumps over the lazy dog"
    Use positive indexing to print on the console the character “b”.
    Use negative indexing to print on the console the character “s”. 
*/

let strVar = 'The quick brown fox jumps over the lazy dog';


let charPos = strVar.at(10);    // positive index to print char 'b'
let charNeg = strVar.at(-19);   // negative index to print char 's'

console.log(charPos);
console.log(charNeg);
