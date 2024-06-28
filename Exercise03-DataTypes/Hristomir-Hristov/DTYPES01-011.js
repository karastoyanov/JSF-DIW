/*

Define three string variables with your three names (first, middle and family).
Declare a fourth variable. Initialize it with the sum of the character codes from the first
characters from each name. Print all variables with appropriate text on the console.

*/

let firstName = 'Hristomir';
let middleName = "Ilkov";
let lastName = 'Hristov';

let result;

result = firstName.charCodeAt(0) + middleName.charCodeAt(0) + lastName.charCodeAt(0);

console.log(`The character code of the first letter of my first name "${firstName}" is ${firstName.charCodeAt(0)}.`);
console.log(`The character code of the first letter of my middle name "${middleName}" is ${middleName.charCodeAt(0)}.`);
console.log(`The character code of the first letter of my last name "${lastName}" is also ${lastName.charCodeAt(0)}.`);
console.log(`The sum of the character codes of the first letters of my names is ${result}.`);