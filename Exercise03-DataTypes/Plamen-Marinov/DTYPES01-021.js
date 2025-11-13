/*
DTYPES01-021: Check if the word “jump” exists in the following text (called pangram):
The quick brown fox jumps over the lazy dog
If it does not exist -> print “does not exist”.
If it is fount -> print “found at position: <position>. 
*/

let pangram = "The quick brown fox jumps over the lazy dog";
let searchWord = "jump";

let position = pangram.indexOf(searchWord);

console.log(position === -1 ? "does not exist" : "found at position: " + position);