/*
DTYPES01-013: Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the first
characters from each name, minus the sum of the character codes from the last 
characters from each name. Print the fourth variable on the console.
*/

let firstName = "Plamen";
let middleName = "Georgiev";
let familyName = "Marinov";

let firstCharSum = firstName.charCodeAt(0) + middleName.charCodeAt(0) + familyName.charCodeAt(0);
let lastCharSum = firstName.charCodeAt(firstName.length - 1) + middleName.charCodeAt(middleName.length - 1) + familyName.charCodeAt(familyName.length - 1);

let difference = firstCharSum - lastCharSum;

console.log(difference);