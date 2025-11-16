/*
FUNCTIONS01-006: Write a function that takes a string as an argument and returns the 
number of words in the string.
*/

function countWords(str) {
  const words = str.trim().split(" ");
  return words.length;
}

console.log(countWords("Write a function that takes a string as an argument!"));