// DTYPES01-009: Define four string variables with your three names (first, middle and family). 
// The fourth variable initialize with the concatenation of the first characters from each 
// name (capitalize them), separated with a dot “.” character. Print the fourth variable on 
// the console.

let firstName = 'genko';
let middleName = 'petev';
let lastName = 'valkinov';

let firstCharacters = `${firstName[0]}.${middleName[0]}.${lastName[0]}`.toUpperCase();

console.log(firstCharacters);