//      BASICS02-007: Declare five variables. Assign them with the randomly chosen emoji characters. Print the UNICODE codes on the console – on one line, separated with commas and space after each comma character.

let rand1 = "👋".codePointAt(0);
let rand2 = "🤠".codePointAt(0);
let rand3 = "🤪".codePointAt(0);
let rand4 = "👍".codePointAt(0);
let rand5 = "🕺".codePointAt(0);

console.log(rand1.toString(16)+", "+rand2.toString(16)+", "+rand3.toString(16)+", "+rand4.toString(16)+", "+rand5.toString(16));