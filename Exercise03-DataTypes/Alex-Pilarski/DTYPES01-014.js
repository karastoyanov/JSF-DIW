/* Define a string variable with the following text (called pangram):
The quick brown fox jumps over the lazy dog
Use positive indexing to print on the console the character “b”.
Use negative indexing to print on the console the character “s”. */

let pangram = `The quick brown fox jumps over the lazy dog`;

console.log("Character at positive index 10: " + pangram.at(10));
console.log("Character at negative index -19: " + pangram.at(-19));