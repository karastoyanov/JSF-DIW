/*
FUNCTIONS01-004: Write a function that takes a string as an argument and returns the longest 
word in the string.
*/

function longestWord(str) {
  const words = str.split(" ");

  let longest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

console.log(longestWord("Write a function that takes a string as an argument"));