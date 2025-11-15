// Check if the word “jump” exists in the following text (called pangram), ignoring the case sensitivity:
// The quick brown fox jumps over the lazy dog
// If it does not exist -> print “does not exist”.
// If it is fount -> print “found at position: <position></position>

let pangram = "The quick brown fox jumps over the lazy dog";
let index = pangram.search(/JUMP/i);

let message = (index >= 0) ? `Found at position ${index}.` : `Does not exist.`;

console.log(message);