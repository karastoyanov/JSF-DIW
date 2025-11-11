// DTYPES01-012: Define three string variables with your three names (first, middle and family). 
// Declare a fourth variable. Initialize it with the sum of the character codes from the last 
// characters from each name. Print all variables with appropriate text on the console

let firstName = 'Genko';
let middleName = 'Petev';
let lastName = 'Valkinov';
let lastCharacterCodeSum = firstName.charCodeAt(firstName.length - 1) + middleName.charCodeAt(middleName.length - 1) + lastName.charCodeAt(lastName.length - 1);

console.log(`Sum of the last characters of my names: ${lastCharacterCodeSum}`);
console.log(`Charcode for the last character of "${firstName}": ${firstName.charCodeAt(firstName.length - 1)}`);
console.log(`Charcode for the last character of "${middleName}": ${middleName.charCodeAt(middleName.length - 1)}`);
console.log(`Charcode for the last character of "${lastName}": ${lastName.charCodeAt(lastName.length - 1)}`);