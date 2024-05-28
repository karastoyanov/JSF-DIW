/*
Define three string variables with your three names (first, middle and family).
Declare a fourth variable. Initialize it with the sum of the character codes from the last
characters from each name. Print all variables with appropriate text on the console.
*/

let firstName = 'Hristomir';
let middleName = "Ilkov";
let lastName = 'Hristov';

let result;

result = firstName.charCodeAt(firstName.length-1) + middleName.charCodeAt(middleName.length-1) + lastName.charCodeAt(lastName.length-1);

console.log(`The character code of the last letter of my first name "${firstName}" is ${firstName.charCodeAt(firstName.length-1)}.`);
console.log(`The character code of the last letter of my middle name "${middleName}" is ${middleName.charCodeAt(middleName.length-1)}.`);
console.log(`The character code of the last letter of my last name "${lastName}" is also ${lastName.charCodeAt(lastName.length-1)}.`);
console.log(`The sum of the character codes of the last letters of my names is ${result}.`);