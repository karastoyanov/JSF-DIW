/*
DTYPES01-022: 
Check if the word “jump” exists in the following text (called pangram):
The quick brown fox jumps over the lazy dog
If it does not exist -> print “does not exist”.
If it is fount -> print “found at position: <position>. 
*/

const pangram = 'The quick brown fox jumps over the lazy dog';
pangram.includes('jump') ? 

console.log(`found at position: ${pangram.indexOf('jump')}.`) : console.log('does not exist');