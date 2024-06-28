/*
Define four string variables with your three names (first, middle and family).
The fourth variable initialize with the concatenation of the first characters from each
name. Print the fourth variable on the console.
*/

let firstName = 'Hristomir';
let middleName = "Ilkov";
let lastName = 'Hristov';

let allNames = firstName[0].concat(middleName[0], lastName[0]);

console.log(allNames);