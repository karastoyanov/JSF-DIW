/*
DTYPES02-011: What will be the result, if you convert an empty string variable to Boolean and
one more time convert the result to number? Print the result on the console.
*/
let emptyString = '';
let bool = Boolean(emptyString);
let number = Number(bool);
console.log(bool);
console.log(number);