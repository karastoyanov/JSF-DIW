/*      DTYPES01-012: Define three string variables with your three names (first, middle and family). 
        Declare a fourth variable. Initialize it with the sum of the character codes from the last characters from each name. 
        Print all variables with appropriate text on the console.
*/

let firstName = "Plamen";
let secondName = "Tsvetomirov";
let lastName = "Dilkinski";

let sumVar = firstName.charCodeAt(5) + secondName.charCodeAt(10) + lastName.charCodeAt(8);

/*console.log(firstName.charAt(5));       
console.log(secondName.charAt(10));     Verifying the position of each letter. Not part of the task, so leaving it commented out.
console.log(lastName.charAt(8));
*/

console.log(`The codes of the last letter from each name are: ${firstName.charCodeAt(5)}, ${secondName.charCodeAt(10)}, ${lastName.charCodeAt(0)}. The sum of all codes is: ${sumVar}`);