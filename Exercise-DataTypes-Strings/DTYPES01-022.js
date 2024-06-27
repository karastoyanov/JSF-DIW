/*Check if the word “jump” exists in the following text (called pangram):
The quick brown fox jumps over the lazy dog
If it does not exist -> print “does not exist”.
If it is fount -> print “found at position: <position>. */

let pangram = 'The quick brown fox jumps over the lazy dog';
let word = 'jump';
let position = pangram.indexOf(word);

position === -1 
    ? console.log('does not exist') 
    : console.log(`found at position: ${position}`);