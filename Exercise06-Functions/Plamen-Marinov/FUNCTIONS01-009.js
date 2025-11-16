/*
FUNCTIONS01-009: Write a function that takes a string and a character as arguments and 
returns the number of times the character occurs in the string.
*/

function charCount(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++
    }
  }

  return count;
}

console.log(charCount("Write a function that takes a string and a character as arguments", "t"));