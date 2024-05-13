//      BASICS02-001: Declare five variables. Assign them with the ASCII codes of the first five English capital alphabet characters. Print them on the console.

//      Using the table with ACI codes from the following table: https://theasciicode.com.ar/ascii-printable-characters/capital-letter-d-uppercase-ascii-code-68.html

let asc1 = 65;
let asc2 = 66;
let asc3 = 67;
let asc4 = 68;
let asc5 = 69;

// console.log(asc1,asc2,asc3,asc4,asc5);

// the idea of the exercise is to print the characters, using their ASCII codes
// ... not to print the assigned codes as numbers

console.log(String.fromCharCode(asc1), String.fromCharCode(asc2), String.fromCharCode(asc3), String.fromCharCode(asc4), String.fromCharCode(asc5));

