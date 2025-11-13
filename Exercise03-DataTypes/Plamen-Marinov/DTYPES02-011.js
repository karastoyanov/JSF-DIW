/*
DTYPES02-011: What will be the result, if you convert an empty string variable to Boolean and 
one more time convert the result to number? Print the result on the console.
*/

let string = "";

let booleanValue = Boolean(string);
let numberValue = Number(booleanValue);

console.log(numberValue);