/**
 * LOOPS01-009: Write a program to reverse a string.
 */

let Text = 'The quick brown fox jumped over the lazy doggy';
let arr = Text.split('');
const TextLength = Text.length;

console.log('NOT Reversed: ' + Text);

for (let i = 0; i < TextLength / 2; i++) {
  [arr[i], arr[TextLength - i]] = [arr[TextLength - i], arr[i]];
}

Text = arr.join("");
console.log('    Reversed: ' + Text);
