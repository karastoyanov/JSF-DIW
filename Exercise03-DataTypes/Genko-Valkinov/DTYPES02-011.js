// DTYPES02-011: What will be the result, if you convert an empty string variable to Boolean and 
// one more time convert the result to number? Print the result on the console.

let emptyString = '';

emptyString = Boolean(emptyString);
emptyString = Number(emptyString);

console.log(emptyString);