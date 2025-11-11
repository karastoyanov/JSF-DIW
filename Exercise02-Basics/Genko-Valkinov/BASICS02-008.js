// BASICS02-008: Declare five variables. Assign them with the randomly chosen emoji 
// characters. Print the UNICODE codes in hex format on the console – on different lines.

let a = '😥'.codePointAt(0);
let b = '😏'.codePointAt(0);
let c = '🤓'.codePointAt(0);
let d = '😡'.codePointAt(0);
let e = '💀'.codePointAt(0);

console.log(a.toString(16));
console.log(b.toString(16));
console.log(c.toString(16));
console.log(d.toString(16));
console.log(e.toString(16));