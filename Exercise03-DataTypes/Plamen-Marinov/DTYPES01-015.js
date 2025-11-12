/*
DTYPES01-015: Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the 
second characters from each name, minus the sum of the character codes from the 
characters before last from each name. Print the fourth variable on the console.
*/

let firstName = "Plamen";
let middleName = "Georgiev";
let familyName = "Marinov";

let secondCharSum = firstName.charCodeAt(1) + middleName.charCodeAt(1) + familyName.charCodeAt(1);

let beforeLastCharSum = firstName.charCodeAt(firstName.length - 2) + middleName.charCodeAt(middleName.length - 2) + familyName.charCodeAt(familyName.length - 2);

let result = secondCharSum - beforeLastCharSum;

console.log(result);