
/*
DTYPES01-007: Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with all names, separated with a dash “-“ character. Make 
sure that only the first letter of each name is capital, all other letters are lowercase. Print 
on the console the length of each string.
*/

let firstName = 'Martin';
let middleName = 'Stoyanov';
let familyName = 'Zhivkov';
let fullName = `${firstName}-${middleName}-${familyName}`;

console.log(`The first name length is ${firstName.length} characters long.`);
console.log(`The middle name length is ${middleName.length} characters long.`);
console.log(`The family name length is ${familyName.length} characters long.`);
console.log(`The full name length is ${fullName.length} characters long.`);