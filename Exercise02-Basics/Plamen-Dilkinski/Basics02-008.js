//      BASICS02-008: Declare five variables. Assign them with the randomly chosen emoji characters. Print the UNICODE codes in hex format on the console – on diWerent lines.

let rand1 = "👋".codePointAt(0);
let rand2 = "🤠".codePointAt(0);
let rand3 = "🤪".codePointAt(0);
let rand4 = "👍".codePointAt(0);
let rand5 = "🕺".codePointAt(0);
console.log(rand1.toString(16)); // UTF-16 in this example, versus UTF-8 in Basics02-006?
console.log(rand2.toString(16));
console.log(rand3.toString(16));
console.log(rand4.toString(16));
console.log(rand5.toString(16));