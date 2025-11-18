// FUNCTIONS01-004: Write a function that takes a string as an argument and returns the longest 
// word in the string.

const longestWordInAString = input => input.replaceAll(/[.,]/g, "").split(' ').reduce((acc, cur) => cur.length > acc.length ? cur : acc);

console.log(longestWordInAString('one two three, five. eight.'));