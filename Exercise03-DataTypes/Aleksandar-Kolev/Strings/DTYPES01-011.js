// Define three string variables with your three names (first, middle and family). 
// Declare a fourth variable. 
// Initialize it with the sum of the character codes from the first characters from each name. 
// Print all variables with appropriate text on the console.

let firstName = "Aleksandar";
let secondName = "Angelov";
let lastName = "Kolev";

let sum = firstName.charCodeAt(0) + secondName.charCodeAt(0) + lastName.charCodeAt(0);

console.log(`First name is: ${firstName}`);
console.log(`Middle name is: ${secondName}`);
console.log(`Family name is: ${lastName}`);
console.log(`The sum of the character codes of each first letter is: ${sum}`);
