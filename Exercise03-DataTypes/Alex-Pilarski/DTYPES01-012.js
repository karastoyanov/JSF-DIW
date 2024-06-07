/* Define three string variables with your three names (first, middle and family).
Declare a fourth variable. Initialize it with the sum of the character codes from the last
characters from each name. Print all variables with appropriate text on the console. */

let firstName = 'Alexander';
let middleName = 'Plamenov';
let lastName = 'Pilarski';

let sum = firstName.charCodeAt(firstName.length - 1) + middleName.charCodeAt(middleName.length - 1) + lastName.charCodeAt(lastName.length - 1);

console.log("First Name: " + firstName);
console.log("Middle Name: " + middleName);
console.log("Family Name: " + lastName);
console.log("Sum of Character Codes of Last Characters: " + sum);
