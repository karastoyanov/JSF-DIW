
/*
DTYPES01-008: Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with the concatenation of the first characters from each 
name. Print the fourth variable on the console.
*/


let firstName = 'Martin';
let middleName = 'Stoyanov';
let familyName = 'Zhivkov';
let concatName = `${firstName.charAt(0)}${middleName.charAt(0)}${familyName.charAt(0)}`;

console.log(concatName);