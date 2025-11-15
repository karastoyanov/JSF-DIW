// Define four string variables with your three names (first, middle and family). 
// The fourth variable initialize with all names, separated with a dash “-“ character. 
// Make sure that only the first letter of each name is capital, all other letters are lowercase.
// Print on the console the length of each string.

let firstName = "aleksandar";
let secondName = "angelov";
let lastName = "kolev";
let allNames = `${firstName}-${secondName}-${lastName}`;

let firstCap = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLocaleLowerCase();
let secondCap = secondName.charAt(0).toUpperCase() + secondName.slice(1).toLocaleLowerCase();
let lastCap = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLocaleLowerCase();

let firstLen = firstName.length;
let secondLen = secondName.length;
let lastLen = lastName.length;
let allLen = allNames.length;

console.log(firstLen, secondLen, lastLen, allLen);