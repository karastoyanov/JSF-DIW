/*

Define four string variables with your three names (first, middle and family).
The fourth variable initialize with the concatenation of the first characters (capitalize
them) from each name. Print the fourth variable on the console.

*/

let firstName = 'hristomir';
let middleName = "ilkov";
let lastName = 'hristov';

let allNames = (firstName[0].concat(middleName[0], lastName[0])).toUpperCase();

console.log(allNames);