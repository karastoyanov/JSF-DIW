// DTYPES01-006: Define four string variables with your three names (first, middle and family). 
// The fourth variable initialize with all names, separated with a tab character. Print on the 
// console the length of each variable.

let firstName = 'Genko';
let middleName = 'Petev';
let lastName = 'Valkinov';

let fullName = `${firstName}\t${middleName}\t${lastName}`;

console.log(`First name length: ${firstName.length}`);
console.log(`Middle name length: ${middleName.length}`);
console.log(`Last name length: ${lastName.length}`);
console.log(`Full name length: ${fullName.length}`);