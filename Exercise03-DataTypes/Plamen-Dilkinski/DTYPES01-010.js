/*  DTYPES01-010: Define four string variables with your three names (first, middle and family). 
    The fourth variable initialize with the concatenation of the first characters (capitalize them) from each name plus the concatenation in reverse order (again capital letters). 
    Print the fourth variable on the console.
*/


let firstName = "Plamen";
let secondName = "tsvetomirov";
let lastName = "dilkinski";

let summaryVar1 = `${firstName.toUpperCase().charAt(0)}${secondName.toUpperCase().charAt(0)}${lastName.toUpperCase().charAt(0)}`;

let summaryVar2 = `${lastName.toUpperCase().charAt(0)}${secondName.toUpperCase().charAt(0)}${firstName.toUpperCase().charAt(0)}`;   // changing a bit the condtion of the task, but looks easier in this way

let concatVar = summaryVar1.concat(summaryVar2)

console.log(concatVar);