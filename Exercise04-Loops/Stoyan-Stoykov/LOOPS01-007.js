/**
 * LOOPS01-007: Write a program to count the number of vowels (гласни) in a given string using
  for loop and if-else.
 */

const Text = 'The quick brown fox jumped over the lazy doggy';
let countVowels = 0;

for (const ch of Text.toLowerCase()) {
  if (ch === 'a') {
    countVowels++;
  }
  if (ch === 'e') {
    countVowels++;
  }
  if (ch === 'i') {
    countVowels++;
  }
  if (ch === 'o') {
    countVowels++;
  }
  if (ch === 'u') {
    countVowels++;
  }
}

console.log(`The vowels in '${Text}' are ${countVowels}`);
