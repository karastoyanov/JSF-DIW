//      BASICS02-006: Declare five variables. Assign them with the randomly chosen emoji characters. Print the UNICODE codes on the console – on diWerent lines.

let rand1 = "👋".codePointAt(0);
let rand2 = "🤠".codePointAt(0);
let rand3 = "🤪".codePointAt(0);
let rand4 = "👍".codePointAt(0);
let rand5 = "🕺".codePointAt(0);
console.log(rand1.toString(8)); // UTF-8 in this example, versus UTF-16 in Basics02-008?
console.log(rand2.toString(8));
console.log(rand3.toString(8));
console.log(rand4.toString(8));
console.log(rand5.toString(8));