// DTYPES01-011: Define three string variables with your three names (first, middle and family). 
// Declare a fourth variable. Initialize it with the sum of the character codes from the first 
// characters from each name. Print all variables with appropriate text on the console

let firstName = 'Genko';
let middleName = 'Petev';
let lastName = 'Valkinov';
let firstCharacterCodeSum = firstName.charCodeAt(0) + middleName.charCodeAt(0) + lastName.charCodeAt(0);

console.log(`Sum of the first characters of my names: ${firstCharacterCodeSum}`);
console.log(`Charcode for the first character of "${firstName}": ${firstName.charCodeAt(0)}`);
console.log(`Charcode for the first character of "${middleName}": ${middleName.charCodeAt(0)}`);
console.log(`Charcode for the first character of "${lastName}": ${lastName.charCodeAt(0)}`);