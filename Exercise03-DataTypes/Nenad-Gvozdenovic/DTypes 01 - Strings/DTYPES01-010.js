/*
DTYPES01-010: Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with the concatenation of the first characters (capitalize 
them) from each name plus the concatenation in reverse order (again capital letters). 
Print the fourth variable on the console.
*/

let firstName = "nenad";
let middleName = "ng";
let lastName = "gvozdenovic";
let allNames = ((firstName.charAt(0)+middleName.charAt(0)+lastName.charAt(0)).toUpperCase())+((lastName.charAt(0)+middleName.charAt(0)+firstName.charAt(0)).toUpperCase());

console.log(allNames);