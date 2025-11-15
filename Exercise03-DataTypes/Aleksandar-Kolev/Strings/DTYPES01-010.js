// Define four string variables with your three names (first, middle and family). 
// The fourth variable initialize with the concatenation of the first characters
// (capitalize them) from each name plus the concatenation in reverse order (again capital letters). 
// Print the fourth variable on the console.

let firstName = "aleksandar";
let secondName = "angelov";
let lastName = "kolev";

let initals = (firstName[0].concat(secondName[0], lastName[0]) + lastName[0].concat(secondName[0], firstName[0])).toUpperCase();

console.log(initals);