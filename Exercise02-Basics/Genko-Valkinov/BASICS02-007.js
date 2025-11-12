// BASICS02-007: Declare five variables. Assign them with the randomly chosen emoji 
// characters. Print the UNICODE codes on the console – on one line, separated with 
// commas and space after each comma character

let a = '😥'.codePointAt(0);
let b = '😏'.codePointAt(0);
let c = '🤓'.codePointAt(0);
let d = '😡'.codePointAt(0);
let e = '💀'.codePointAt(0);

console.log(a.toString() + ', ' + b.toString() + ', ' + c.toString() + ', ' + d.toString() + ', ' + e.toString());