"use strict"
/*
DTYPES01-006: Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with all names, separated with a tab character. Print on the 
console the length of each variable. 
*/

let firstName = 'Aleksandra';
let middleName = 'Stoyanova';
let familyName = 'Kyuchukova';
let fullName = `${firstName}    ${middleName}   ${familyName}`;

console.log(`First name length: ${firstName.length}`);
console.log(`Middle name length: ${middleName.length}`);
console.log(`Family name length: ${familyName.length}`);
console.log(`Full name length: ${fullName.length}`);

