/**
 * FUNCTIONS01-006: Write a function that takes a string as an argument and returns the
number of words in the string.
 */

const countWords = str => str.trim().split(/\s+/).length;

function countWords2(str) {
  let count = 0;
  let inWord = false;

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    const isSpace =
      ch === ' ' || ch === '\t' || ch === '\n' || ch === '\r' || ch === '\v' || ch === '\f';

    if (isSpace) {
      inWord = false;
      continue;
    }

    if (!inWord) {
      count++;
      inWord = true;
    }
  }
  return count;
}

console.log('One liner: ' + countWords('The quick brown fox jumped over the lazy doggoo!'));
console.log('Function:  ' +
  countWords2(
    "The professor's lecture on antidisestablishmentarianism was delivered with such honorificabilitudinitatibus that the audience felt intellectually elevated."
  )
);
