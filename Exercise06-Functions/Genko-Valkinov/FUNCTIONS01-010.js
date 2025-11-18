// FUNCTIONS01-010: Write a function that takes an array as an argument and returns a new 
// array with all false values removed.

const removeFalsies = input => input.filter(element => element);

console.log(removeFalsies(['one', 1, 0, 20, null, '', false, true]));