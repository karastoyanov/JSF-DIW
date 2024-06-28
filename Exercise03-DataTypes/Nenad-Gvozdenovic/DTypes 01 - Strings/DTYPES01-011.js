/*
DTYPES01-011: Define three string variables with your three names (first, middle and family). 
Declare a fourth variable. Initialize it with the sum of the character codes from the first 
characters from each name. Print all variables with appropriate text on the console.
*/

let firstName = "nenad";
let middleName = "ng";
let lastName = "gvozdenovic";
let allNames = firstName.charAt(0)+middleName.charAt(0)+lastName.charAt(0);

console.log(allNames);