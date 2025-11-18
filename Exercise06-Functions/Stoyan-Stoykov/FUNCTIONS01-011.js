/**
 * FUNCTIONS01-011: Write a function that takes a string as an argument and returns the string
with the first letter of each word capitalized.
 */

const capitalizeWords = str => str.replace(/\b\w/g, c => c.toUpperCase());

function capitalizeWords2(str) {
  let result = '';
  let capitalizeNext = true;

  for (const ch of str) {
    if (ch === ' ' || ch === '\t' || ch === '\n') {
      result += ch;
      capitalizeNext = true;

      continue;
    }
    if (capitalizeNext) {
      result += ch.toUpperCase();
      capitalizeNext = false;

      continue;
    }

    result += ch;
  }
  return result;
}

console.log('One liner: ' + capitalizeWords('the \n quick brown fox jumped over the lazy doggo!'));
console.log('Function:  ' + capitalizeWords2('hello world! this is \t a test.'));
