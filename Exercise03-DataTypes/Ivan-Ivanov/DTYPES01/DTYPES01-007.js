/*
DTYPES01-007: Define four string variables with your three names (first, middle and family).
The fourth variable initialize with all names, separated with a dash “-“ character. Make
sure that only the first letter of each name is capital, all other letters are lowercase. Print
on the console the length of each string.
*/

let firstName = 'Ivan';
let middleName = 'Georgiev';
let lastName = 'Vazov';
let fullName = `${firstName}-${middleName}-${lastName}`;

let firstLength = firstName.length;
let middleLength = middleName.length;
let lastLength = lastName.length;
let fullLength = fullName.length;

console.log(fullName);
console.log(`First name is ${firstLength} chars long, middle name is ${middleLength} chars long and last name is ${lastLength} chars long, Full name is ${fullLength} chars long`)

