/*
DTYPES01-011: Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the first 
characters from each name. Print all variables with appropriate text on the console.
*/

let firstName = "Plamen";
let middleName = "Georgiev";
let familyName = "Marinov";

let sumCharacters = firstName.charCodeAt(0) + middleName.charCodeAt(0) + familyName.charCodeAt(0);

console.log("First name: " + firstName);
console.log("Middle name: " + middleName);
console.log("Family name: " + familyName);
console.log("Sum of character codes: " + sumCharacters);