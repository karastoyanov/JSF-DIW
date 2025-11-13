/**
 * LOOPS01-011: Write a program to check if a given string is a palindrome (reads the same
  string in both directions – from the beginning to the end and vice versa – the same
  string).
 */

let text1 = 'racecar';
let text2 = 'never odd or even';
let text3 = 'not a palindrome';

const Text = text2.replaceAll(' ', '');
const Length = Text.length;

for (let i = 0; i < Length / 2; i++) {
  if (Text[i] !== Text[Length - 1 - i]) {
    console.log('Not palindrome');
    return 1;
  }
}

console.log('Palindrome');
