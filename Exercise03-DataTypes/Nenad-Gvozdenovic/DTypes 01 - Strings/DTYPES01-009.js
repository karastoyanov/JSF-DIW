/*
DTYPES01-009: Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with the concatenation of the first characters (capitalize 
them) from each name. Print the fourth variable on the console.
*/

let firstName = "nenad";
let middleName = "nG";
let lastName = "gvozdenovic";
let allNames = (firstName.charAt(0)+middleName.charAt(0)+lastName.charAt(0)).toUpperCase();

console.log(allNames);