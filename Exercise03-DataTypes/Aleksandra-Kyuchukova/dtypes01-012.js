/*
DTYPES01-012: Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the last 
characters from each name. Print all variables with appropriate text on the console. */

let firstName = 'Aleksandra';
let middleName = 'Stoyanova';
let familyName = 'Kyuchukova';

let sum = firstName.charCodeAt(firstName.length-1) + middleName.charCodeAt(middleName.length-1) + familyName.charCodeAt(familyName.length-1);

console.log(`The first name: ${firstName}`);
console.log(`The middle name: ${middleName}`);
console.log(`The family name: ${familyName}`);
console.log(`The sum of the character codes from the last characters from each name is ${sum}`);

