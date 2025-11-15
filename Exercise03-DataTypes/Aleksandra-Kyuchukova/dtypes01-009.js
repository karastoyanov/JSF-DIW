/*
DTYPES01-009: Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with the concatenation of the first characters from each 
name (capitalize them), separated with a dot “.” character. Print the fourth variable on 
the console. */

let firstName = 'aleksandra';
let middleName = 'stoyanova';
let familyName = 'kyuchukova';

let result = firstName[0] + '.' + middleName[0] + '.' + familyName[0];

console.log(result.toUpperCase());


