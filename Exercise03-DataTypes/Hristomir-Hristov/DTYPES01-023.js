/*

Check if the word “jump” exists in the following text (called pangram),
ignoring the case sensitivity:
The quick brown fox jumps over the lazy dog
If it does not exist -> print “does not exist”.
If it is fount -> print “found at position: <position>.

*/

let pangram = 'The quick brown fox jumps over the lazy dog';

let result = pangram.search(/JumP/i);

let message = (result >= 0) ? `found at position: ${result}` : `does not exist`;

console.log(message);