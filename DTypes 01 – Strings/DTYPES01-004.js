/*
DTYPES01-004: Define two multi-line string variables in three ways. (hint: use single quotes, 
double quotes, string literals).
*/

let multiLineOne = 'This is the first multi-line \nstring variable in single quotes.';
let multiLineTwo = 'This is the second multi-line \nstring variable in single quotes.';

console.log(multiLineOne);
console.log(multiLineTwo);

multiLineOne = "This is the first multi-line \nstring variable in double quotes.";
multiLineTwo = "This is the second multi-line \nstring variable in double quotes.";

console.log(multiLineOne);
console.log(multiLineTwo);

multiLineOne = `This is the first multi-line 
string variable in string literal.`;
multiLineTwo = `This is the second multi-line 
string variable in string literal.`;

console.log(multiLineOne);
console.log(multiLineTwo);