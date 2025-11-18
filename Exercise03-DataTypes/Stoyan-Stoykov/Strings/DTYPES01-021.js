/**
 * DTYPES01-021: Check if the word “jump” exists in the following text (called pangram):
 * The quick brown fox jumps over the lazy dog
 * If it does not exist -> print “does not exist”.
 * If it is fount -> print “found at position: <position>. 
 */

const Panagram = 'The quick brown fox jumps over the lazy dog';

let searchWord = 'jump';
let searchWord2 = 'notfound'

let position = Panagram.indexOf(searchWord);
let position2 = Panagram.indexOf(searchWord2);

console.log(position === -1 ? 'does not exist' : `found at position: ${position}.`);

console.log(position2 === -1 ? 'does not exist' : `found at position: ${position2}.`);

  