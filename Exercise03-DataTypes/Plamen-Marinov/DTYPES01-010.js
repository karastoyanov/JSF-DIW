/*
Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with the concatenation of the first characters (capitalize 
them) from each name plus the concatenation in reverse order (again capital letters). 
Print the fourth variable on the console.
*/

let firstName = "Plamen";
let middleName = "Georgiev";
let familyName = "Marinov";

let firstChar = firstName.charAt(0).toUpperCase();
let middleChar = middleName.charAt(0).toUpperCase();
let familyChar = familyName.charAt(0).toUpperCase();

let combined = `${firstChar}${middleChar}${familyChar}${familyChar}${middleChar}${firstChar}`;

console.log(combined);