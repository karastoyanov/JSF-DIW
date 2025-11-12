/*
DTYPES01-012: Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the last 
characters from each name. Print all variables with appropriate text on the console.
*/

let firstName = "Plamen";
let middleName = "Georgiev";
let familyName = "Marinov";

let charCodeSum = firstName.charCodeAt(firstName.length - 1) + middleName.charCodeAt(middleName.length - 1) + familyName.charCodeAt(familyName.length - 1);

console.log("First name: " + firstName);
console.log("Middle name: " + middleName);
console.log("Family name: " + familyName);
console.log("Sum of character codes from last characters: " + charCodeSum);