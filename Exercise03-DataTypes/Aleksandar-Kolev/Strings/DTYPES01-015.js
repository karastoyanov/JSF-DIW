// Define three string variables with your three names (first, middle and family).
// Declare a fourth variable. Initialize it with the sum of the character codes from the 
// second characters from each name, minus the sum of the character codes from the 
// characters before last from each name. Print the fourth variable on the console.

let firstName = "Aleksandar";
let secondName = "Angelov";
let lastName = "Kolev";

let sum = (firstName.charCodeAt(1) + secondName.charCodeAt(1) + lastName.charCodeAt(1)) - (firstName.charCodeAt(firstName.length -2) + secondName.charCodeAt(secondName.length -2) + lastName.charCodeAt(lastName.length -2));

console.log(sum);