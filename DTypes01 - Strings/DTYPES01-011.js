
/*
DTYPES01-011: Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the first 
characters from each name. Print all variables with appropriate text on the console.
*/
let firstName = 'Martin';
let middleName = 'Stoyanov';
let familyName = 'Zhivkov';
let sumChar = firstName.charCodeAt(0) + middleName.charCodeAt(0) + familyName.charCodeAt(0);

console.log(`The unicode value for my first name is ${firstName.charCodeAt(0)}.`);
console.log(`The unicode value for my middle name is ${middleName.charCodeAt(0)}.`);
console.log(`The unicode value for my family name is ${familyName.charCodeAt(0)}.`);
console.log(`The sum of the unicode values for the first letters of my first, middle and last name is ${sumChar}.`);

