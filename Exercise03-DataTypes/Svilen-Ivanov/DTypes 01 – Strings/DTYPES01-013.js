/*
DTYPES01-013: Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the first
characters from each name, minus the sum of the character codes from the last 
characters from each name. Print the fourth variable on the console.
*/

let firstName = 'Svilen';
let middleName = 'Svilenov';
let familyName = 'Ivanov';
let sumChars = (firstName.charCodeAt(0) + middleName.charCodeAt(0) + familyName.charCodeAt(0))-
(firstName.at(-1).charCodeAt(0) + middleName.at(-1).charCodeAt(0) + familyName.at(-1).charCodeAt(0));

console.log(`The sum of the unicode values for the first letters of my first, middle and last name minus
the sum of the unicode values for the last letters of my first, middle and last name is ${sumChars}.`);