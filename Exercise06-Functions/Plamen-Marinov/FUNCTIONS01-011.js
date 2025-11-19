/*
FUNCTIONS01-011: Write a function that takes a string as an argument and returns the string 
with the first letter of each word capitalized.
*/

function capitalizeWords(str) {

  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }
  return words.join(" ");
}

console.log(capitalizeWords("Write a function that takes a string as an argument"));