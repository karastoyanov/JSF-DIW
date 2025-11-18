/*
DTYPES01-013: Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the first
characters from each name, minus the sum of the character codes from the last 
characters from each name. Print the fourth variable on the console.
 */

let firstName = 'Aleksandra';
let middleName = 'Stoyanova';
let familyName = 'Kyuchukova';

let result = (firstName.charCodeAt(0) + middleName.charCodeAt(0) + familyName.charCodeAt(0)) - (firstName.charCodeAt(firstName.length-1) + middleName.charCodeAt(middleName.length-1) + familyName.charCodeAt(familyName.length-1));

console.log(`The result of the character codes from the first characters minus last characters from each name is ${result}`);

