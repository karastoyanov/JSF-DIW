/*      DTYPES01-013: Define three string variables with your three names (first, middle and family).
        Declare a fourth variable. Initialize it with the sum of the character codes from the first characters from each name, minus the sum of the character codes from the last characters from each name. 
        Print the fourth variable on the console.
*/

let firstName = "Plamen";
let secondName = "Tsvetomirov";
let lastName = "Dilkinski";

let substractVar = (firstName.charCodeAt(0) + secondName.charCodeAt(0) + lastName.charCodeAt(0)) - (firstName.charCodeAt(5) + secondName.charCodeAt(10) + lastName.charCodeAt(8));

console.log(substractVar);