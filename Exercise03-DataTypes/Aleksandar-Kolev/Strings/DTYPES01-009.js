// Define four string variables with your three names (first, middle and family).
// The fourth variable initialize with the concatenation of the first characters from each name
// (capitalize them), separated with a dot “.” character. Print the fourth variable on the console.

let firstName = "aleksandar";
let secondName = "angelov";
let lastName = "kolev";

let initals = firstName[0].toUpperCase().concat('.',secondName[0].toUpperCase(),".",lastName[0].toUpperCase());

console.log(initals);