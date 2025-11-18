/**
 * FUNCTIONS01-009: Write a function that takes a string and a character as arguments and
returns the number of times the character occurs in the string
 */

const countChar = (str, ch) => [...str].filter(c => c === ch).length;
  
function countChar2(str, ch) {
  let count = 0;
  for (const c of str) {
    c === ch && count++;
  }

  return count;
}

console.log('One liner: ' + countChar('The quick brown fox jumped over the lazy doggoo!', 'q'));
console.log('Function:  ' + countChar2('honorificabilitudinitatibus', 'i'));
