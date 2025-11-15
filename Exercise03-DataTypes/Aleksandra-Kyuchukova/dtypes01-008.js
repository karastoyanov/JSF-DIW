/*
DTYPES01-008: Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with the concatenation of the first characters from each 
name. Print the fourth variable on the console */

let firstName = 'Aleksandra';
let middleName = 'Stoyanova';
let familyName = 'Kyuchukova';

let result = firstName.charAt(0) + middleName.charAt(0) + familyName.charAt(0);

console.log(result);


