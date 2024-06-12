/*  DTYPES01-015: Define three string variables with your three names (first, middle and family). Declare a fourth variable. 
    Initialize it with the sum of the character codes from the second characters from each name, minus the sum of the character codes from the characters before last from each name. 
    Print the fourth variable on the console. 
*/

let firstName = 'Plamen';
let secondName = 'Tsvetomirov';
let thirdName = 'Dilkinski';

let sumVar = (firstName.charCodeAt(1) + secondName.charCodeAt(1) + thirdName.charCodeAt(1)) - (firstName.charCodeAt(4) + secondName.charCodeAt(9) + thirdName.charCodeAt(7));

console.log(sumVar);
