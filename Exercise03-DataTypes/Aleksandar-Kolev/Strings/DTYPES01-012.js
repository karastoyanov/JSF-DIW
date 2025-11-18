// Define three string variables with your three names (first, middle and family). 
// Declare a fourth variable.
// Initialize it with the sum of the character codes from the last characters from each name. 
// Print all variables with appropriate text on the console.

let firstName = "Aleksandar";
let secondName = "Angelov";
let lastName = "Kolev";

let sum = firstName.charCodeAt(firstName.length -1) + secondName.charCodeAt(secondName.length -1) + lastName.charCodeAt(lastName.length -1);

console.log(`First name is: ${firstName}`);
console.log(`Middle name is: ${secondName}`);
console.log(`Family name is: ${lastName}`);
console.log(`The sum of the character codes of each first letter is: ${sum}`);
