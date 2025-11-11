// DTYPES01-008: Define four string variables with your three names (first, middle and family). 
// The fourth variable initialize with the concatenation of the first characters from each 
// name. Print the fourth variable on the console.

let firstName = 'Genko';
let middleName = 'Petev';
let lastName = 'Valkinov';

let firstCharacters = `${firstName[0]}${middleName[0]}${lastName[0]}`;

console.log(firstCharacters);