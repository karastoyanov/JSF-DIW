/*
DTYPES01-006: Define four string variables with your three names (first, middle and family). 
The fourth variable initialize with all names, separated with a tab character. Print on the 
console the length of each variable.
*/

let firstName = "Plamen";
let middleName = "Georgiev";
let familyName = "Marinov";

let fullName = firstName + "\t" + middleName + "\t" + familyName;

let lengthWithoutTabs = fullName.replace(/\t/g, "").length;

console.log("Length of firstName:", firstName.length);
console.log("Length of middleName:", middleName.length);
console.log("Length of familyName:", familyName.length);
console.log("Length of fullName with tabs:", fullName.length);
console.log("Length of fullName without tabs:", lengthWithoutTabs);