/*
DTYPES01-007: Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with all names, separated with a dash “-“ character. Make 
sure that only the first letter of each name is capital, all other letters are lowercase. Print 
on the console the length of each string. */

let firstName = 'Aleksandra';
let middleName = 'Stoyanova';
let familyName = 'Kyuchukova';
let fullName = `${firstName}-${middleName}-${familyName}`;

console.log(`First name length: ${firstName.length}`);
console.log(`Middle name length: ${middleName.length}`);
console.log(`Family name length: ${familyName.length}`);
console.log(`Full name length: ${fullName.length}`);

