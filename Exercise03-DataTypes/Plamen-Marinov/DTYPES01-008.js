/*
DTYPES01-008: Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with the concatenation of the first characters from each 
name. Print the fourth variable on the console.
*/

let firstName = "Plamen";
let middleName = "Georgiev";
let familyName = "Marinov";

let initials = firstName[0] + middleName[0] + familyName[0];

console.log("Initials:", initials);