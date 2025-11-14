"use strict"
/*
DTYPES01-004: Define two multi-line string variables in three ways. (hint: use single quotes, 
double quotes, string literals). 
*/

let string1w1 = 'Define two multi-line \n' + 'string variables \n' + 'in three ways.';
let string2w1 = 'Use single quotes, \n' + 'double quotes, \n' + 'string literals';

let string1w2 = "Define two multi-line \n" + "string variables \n" + "in three ways.";
let string2w2 = "Use single quotes, \n" + "double quotes, \n" + "string literals";

let string1w3 = `Define two multi-line 
string variables 
in three ways.`;
let string2w3 = `Use single quotes, 
double quotes, 
string literals`;

console.log(string1w1);
console.log(string2w1);
console.log(string1w2);
console.log(string2w2);
console.log(string1w3);
console.log(string2w3);

