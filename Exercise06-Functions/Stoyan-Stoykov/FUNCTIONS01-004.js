
/**
 * FUNCTIONS01-004: Write a function that takes a string as an argument and returns the longest
word in the string.
 */

const longestWord = str => str.split(/\s+/).reduce((a, b) => b.length > a.length ? b : a);

function longestWord2(str) {
  let max = '';
  let curr = '';

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    if (ch !== ' ' && ch !== '\t' && ch !== '\n' && ch !== '\r' && ch !== '\v' && ch !== '\f') {
      curr += ch;
      continue;
    }

    if (curr.length > max.length) {
      max = curr;
    }

    curr = '';
  }

  if (curr.length > max.length) {
    max = curr;
  }

  return max;
}

console.log('One liner: ' + longestWord('The quick brown fox jumped over the lazy doggoo!'));
console.log('Function:  ' +
  longestWord2(
    "The professor's lecture on antidisestablishmentarianism was delivered with such honorificabilitudinitatibus that the audience felt intellectually elevated."
  )
);
