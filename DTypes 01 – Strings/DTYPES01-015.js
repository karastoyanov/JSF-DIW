/*
DTYPES01-015: Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the 
second characters from each name, minus the sum of the character codes from the 
characters before last from each name. Print the fourth variable on the console.
*/
let firstName = 'Svilen';
let middleName = 'Svilenov';
let familyName = 'Ivanov';
let sumChars = (firstName.charCodeAt(1) + middleName.charCodeAt(1) + familyName.charCodeAt(1))-
(firstName.at(-2).charCodeAt(0) + middleName.at(-2).charCodeAt(0) + familyName.at(-2).charCodeAt(0));

console.log(`The sum of the unicode values for the second letters of my first, middle and last name minus
the sum of the unicode values for the before last letters of my first, middle and last name is ${sumChars}.`);