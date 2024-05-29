
/*
DTYPES01-010: Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with the concatenation of the first characters (capitalize
them) from each name plus the concatenation in reverse order (again capital letters). 
Print the fourth variable on the console.
*/

let firstName = 'martin';
let middleName = 'stoyanov';
let familyName = 'Zhivkov';
let concatName = `${firstName.at(0).toUpperCase()}${middleName.at(0).toUpperCase()}${familyName.at(0).toUpperCase()}
${firstName.at(-1).toUpperCase()}${middleName.at(-1).toUpperCase()}${familyName.at(-1).toUpperCase()}`;

console.log(concatName);