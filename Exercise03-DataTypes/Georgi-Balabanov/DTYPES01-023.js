/*DTYPES01-023: Check if the word “jump” exists in the following text (called pangram), 
ignoring the case sensitivity:
The quick brown fox jumps over the lazy dog
If it does not exist -> print “does not exist”.
If it is fount -> print “found at position: <position>. */

const pangram = 'The quick brown fox jumps over the lazy dog';
let search =pangram.search(/jump/i)
search>=0 ? console.log(`found at position: ${search}.`) : console.log('does not exist');


