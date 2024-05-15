//      BASICS02-010: Declare five variables. Assign them with the randomly chosen emoji characters. For each of the variables - print the UNICODE code in binary, octal, decimal, and hex format on one line, separated with comas and space after it.

let rand1 = "👋".codePointAt(0);
let rand2 = "🤠".codePointAt(0);
let rand3 = "🤪".codePointAt(0);
let rand4 = "👍".codePointAt(0);
let rand5 = "🕺".codePointAt(0);

console.log(rand1.toString(2)+", "+(rand1.toString(8))+", "+(rand1.toString(10)+", "+rand1.toString(16)+", "+rand2.toString(2)+", "+rand2.toString(8))+", "+rand2.toString(10)+", "+rand2.toString(16)+", "+rand3.toString(2)+", "+rand3.toString(8)+", "+rand3.toString(10)+", "+rand3.toString(16)+", "+rand4.toString(2)+", "+rand4.toString(8)+", "+rand4.toString(10)+", "+rand4.toString(16)+", "+rand5.toString(2)+", "+rand5.toString(8)+", "+rand5.toString(10)+", "+rand5.toString(16));