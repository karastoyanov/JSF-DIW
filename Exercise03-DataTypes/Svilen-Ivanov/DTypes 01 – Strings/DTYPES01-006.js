/*
DTYPES01-006: Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with all names, separated with a tab character. Print on the 
console the length of each variable.
*/

let firstName = 'Svilen';
let middleName = 'Svilenov';
let familyName = 'Ivanov';
let fullName = `${firstName}    ${middleName}   ${familyName}`;

console.log(`The first name length is ${firstName.length} characters long.`);
console.log(`The middle name length is ${middleName.length} characters long.`);
console.log(`The family name length is ${familyName.length} characters long.`);
console.log(`The full name length is ${fullName.length} characters long.`);