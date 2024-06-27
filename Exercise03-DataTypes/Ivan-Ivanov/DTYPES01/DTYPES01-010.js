/*
DTYPES01-010: Define four string variables with your three names (first, middle and family).
The fourth variable initialize with the concatenation of the first characters (capitalize
them) from each name plus the concatenation in reverse order (again capital letters).
Print the fourth variable on the console.
*/

let firstName = 'ivan';
let middleName = 'georgiev';
let lastName = 'vazov';
let initRev = firstName.charAt(0).toUpperCase() + middleName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase() + "  " + lastName.charAt(0).toUpperCase() + middleName.charAt(0).toUpperCase() + firstName.charAt(0).toUpperCase();

console.log(initRev);