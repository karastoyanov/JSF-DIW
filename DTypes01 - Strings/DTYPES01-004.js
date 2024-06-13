
/*
DTYPES01-004: Define two multi-line string variables in three ways. (hint: use single quotes, 
double quotes, string literals).
*/

let multiLineOne = 'This is the first multi-line use case.';
let multiLineTwo = 'This is the second multi-line use case.';

console.log(multiLineOne);
console.log(multiLineTwo);

multiLineOne = "This is the first multi-line variable in double quotes.";
multiLineTwo = "This is the second multi-line variable in double quotes.";

console.log(multiLineOne);
console.log(multiLineTwo);

multiLineOne = `This is the first multi-line 
string variable in string literal.`;
multiLineTwo = `This is the second multi-line 
string variable in string literal.`;

console.log(multiLineOne);
console.log(multiLineTwo);