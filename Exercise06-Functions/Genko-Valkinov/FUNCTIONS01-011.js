// FUNCTIONS01-011: Write a function that takes a string as an argument and returns the string 
// with the first letter of each word capitalized

const capitalizeFirstLetters = input => input.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ');

console.log(capitalizeFirstLetters('We are currently studying javascript fundamentals.'));