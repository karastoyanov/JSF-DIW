/*
DTYPES01-007: Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with all names, separated with a dash “-“ character. Make 
sure that only the first letter of each name is capital, all other letters are lowercase. Print 
on the console the length of each string.
*/

let firstName = "Plamen";
let middleName = "Georgiev";
let familyName = "Marinov";

let fullName = firstName + "-" + middleName + "-" + familyName;

console.log("Length of firstName:", firstName.length);
console.log("Length of middleName:", middleName.length);
console.log("Length of familyName:", familyName.length);
console.log("Length of fullName:", fullName.length);