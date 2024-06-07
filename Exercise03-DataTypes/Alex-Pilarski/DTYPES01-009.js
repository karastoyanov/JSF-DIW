/* Define four string variables with your three names (first, middle and family).
The fourth variable initialize with the concatenation of the first characters from each
name (capitalize them), separated with a dot “.” character. Print the fourth variable on
the console. */

let firstName = 'аlexander';
let middleName = 'plamenov';
let lastName = 'pilarski';
let allNames = (firstName[0].concat('.', middleName[0], '.', lastName[0])).toUpperCase();

console.log(allNames);