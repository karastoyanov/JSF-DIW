/*      DTYPES01-011: Define three string variables with your three names (first, middle and family). Declare a fourth variable. 
        Initialize it with the sum of the character codes from the first characters from each name. 
        Print all variables with appropriate text on the console.
*/

let firstName = "Plamen";
let secondName = "Tsvetomirov";
let lastName = "Dilkinski";

let sumVar = firstName.charCodeAt(0) + secondName.charCodeAt(0) + lastName.charCodeAt(0);

console.log(sumVar);