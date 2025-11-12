// DTYPES01-021: Check if the word “jump” exists in the following text (called pangram):
// The quick brown fox jumps over the lazy dog
// If it does not exist -> print “does not exist”.
// If it is fount -> print “found at position: <position>.

let pangram = 'The quick brown fox jumps over the lazy dog';
let searchWord = 'jump'

console.log(pangram.includes(searchWord) ? `found at position ${pangram.indexOf(searchWord)}` : `does not exist`);