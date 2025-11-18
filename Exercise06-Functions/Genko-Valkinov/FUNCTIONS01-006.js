// FUNCTIONS01-006: Write a function that takes a string as an argument and returns the 
// number of words in the string.

const numberOfWords = input => input.trim().split(/\s+/).length;

console.log(numberOfWords('edno  dve   tri    pet   osem'));