/*
DTYPES01-011: Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the first 
characters from each name. Print all variables with appropriate text on the console. */

let firstName = 'Aleksandra';
let middleName = 'Stoyanova';
let familyName = 'Kyuchukova';

let sum = firstName.charCodeAt(0) + middleName.charCodeAt(0) + familyName.charCodeAt(0);

console.log(`The first name: ${firstName}`);
console.log(`The middle name: ${middleName}`);
console.log(`The family name: ${familyName}`);
console.log(`The sum of the character codes from the first characters from each name is ${sum}`);

