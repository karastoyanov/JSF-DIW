/*
BASICS02-009: Declare five variables. Assign them with the randomly chosen emoji
characters. Print the UNICODE codes in decimal format on the console – on different
lines.
*/

let a = '😀'.codePointAt(0);
let b = '🙃'.codePointAt(0);
let c = '🤩'.codePointAt(0);
let d = '😛'.codePointAt(0);
let e = '😎'.codePointAt(0);

//console.log(a.codePointAt(0).toString(16) +", "+ b.codePointAt(0).toString(16) +", "+ (c.codePointAt(0).toString(16)) +", "+ (d.codePointAt(0).toString(16)) +", "+ (e.codePointAt(0).toString(16)));

console.log(a.toString(10));
console.log(b.toString(10));
console.log(c.toString(10));
console.log(d.toString(10));
console.log(e.toString(10));