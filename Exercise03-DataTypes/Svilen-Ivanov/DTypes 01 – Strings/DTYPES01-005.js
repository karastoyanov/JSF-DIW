/*
DTYPES01-005: Define a string variable with following format:
My name’s <name>. I’m <age> years old.
Previously define the name and the age values. They will not be changed during the 
further code.
*/

const firstName = 'Svilen';
const age = '40';

let stringVar = `My name’s ${firstName}. I’m ${age} years old.`;

console.log(stringVar);