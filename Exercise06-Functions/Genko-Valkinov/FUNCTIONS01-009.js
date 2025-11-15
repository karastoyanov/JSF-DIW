// FUNCTIONS01-009: Write a function that takes a string and a character as arguments and 
// returns the number of times the character occurs in the string.

const charAppears = (input, char) => input.split('').filter(c => c === char).length;

console.log(charAppears('liverpool  ', 'o'));