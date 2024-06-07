/* Define three string variables with your three names (first, middle and family).
Declare a fourth variable. Initialize it with the sum of the character codes from the first
characters from each name. Print all variables with appropriate text on the console. */

let firstName = 'Alexander';
let middleName = 'Plamenov';
let lastName = 'Pilarski';

let sum = firstName.charCodeAt(0) + middleName.charCodeAt(0) + lastName.charCodeAt(0);

console.log("First Name: " + firstName);
console.log("Middle Name: " + middleName);
console.log("Family Name: " + lastName);
console.log("Sum of Character Codes of First Characters: " + sum);