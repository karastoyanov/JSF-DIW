/*
DTYPES01-009: Define four string variables with your three names (first, middle and family).
The fourth variable initialize with the concatenation of the first characters from each
name (capitalize them), separated with a dot “.” character. Print the fourth variable on
the console.
*/

let firstName = 'ivan';
let middleName = 'georgiev';
let lastName = 'vazov';
let init = firstName.charAt(0).toUpperCase() + "." + middleName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();

console.log(init);