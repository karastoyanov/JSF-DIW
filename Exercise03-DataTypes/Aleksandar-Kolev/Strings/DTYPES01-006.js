// Define four string variables with your three names (first, middle and family).
// The fourth variable initialize with all names, separated with a tab character. 
// Print on the console the length of each variable.

let firstName = "Aleksandar";
let secondName = "Angelov";
let lastName = "Kolev";
let allNames = `${firstName}    ${secondName}    ${lastName}`;

let firstLen = firstName.length;
let secondLen = secondName.length;
let lastLen = lastName.length;
let allLen = allNames.length;

console.log(firstLen, secondLen, lastLen, allLen);