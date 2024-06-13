
/*
DTYPES01-009: Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with the concatenation of the first characters from each 
name (capitalize them), separated with a dot “.” character. Print the fourth variable on 
the console.
*/ 

let firstName = 'Martin';
let middleName = 'Stoyanov';
let familyName = 'Zhivkov';
let concatName = `${firstName.charAt(0).toUpperCase()}.${middleName.charAt(0).toUpperCase()}.${familyName.charAt(0).toUpperCase()}`;

console.log(concatName);