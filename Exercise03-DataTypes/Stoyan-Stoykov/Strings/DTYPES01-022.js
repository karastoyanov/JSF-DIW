/**
 * DTYPES01-022: Check if the word “jump” exists in the following text (called pangram), ignoring the case sensitivity:
 * The quick brown fox jumps over the lazy dog
 * If it does not exist -> print “does not exist”.
 * If it is found -> print “found at position: <position>”.
 */

const Panagram = 'The quick brown fox jumps over the lazy dog';

const searchWord = 'jump';
const position = Panagram.toLowerCase().indexOf(searchWord.toLowerCase());

console.log(position === -1 ? 'does not exist' : `found at position: ${position}.`);
    