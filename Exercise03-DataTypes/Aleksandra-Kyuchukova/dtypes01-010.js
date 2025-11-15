/*
DTYPES01-010: Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with the concatenation of the first characters (capitalize 
them) from each name plus the concatenation in reverse order (again capital letters). 
Print the fourth variable on the console. */

let firstName = 'aleksandra';
let middleName = 'stoyanova';
let familyName = 'kyuchukova';

let result = (firstName[0] + middleName[0] + familyName[0] + familyName[0] + middleName[0] + firstName[0]).toUpperCase();

console.log(result);


