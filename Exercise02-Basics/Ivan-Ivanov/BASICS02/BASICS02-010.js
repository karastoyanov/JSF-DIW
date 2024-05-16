/*BASICS02-010: Declare five variables. Assign them with the randomly chosen emoji
characters. For each of the variables - print the UNICODE code in binary, octal, decimal,
and hex format on one line, separated with comas and space after it.
*/

let a = '😀'.codePointAt(0);
let b = '🙃'.codePointAt(0);
let c = '🤩'.codePointAt(0);
let d = '😛'.codePointAt(0);
let e = '😎'.codePointAt(0);

console.log((a.toString(2)) +", "+ (a.toString(8)) +", "+ (a.toString(10)) +", "+ (a.toString(16)));
console.log((b.toString(2)) +", "+ (b.toString(8)) +", "+ (b.toString(10)) +", "+ (b.toString(16)));
console.log((c.toString(2)) +", "+ (c.toString(8)) +", "+ (c.toString(10)) +", "+ (c.toString(16)));
console.log((d.toString(2)) +", "+ (d.toString(8)) +", "+ (d.toString(10)) +", "+ (d.toString(16)));
console.log((e.toString(2)) +", "+ (e.toString(8)) +", "+ (e.toString(10)) +", "+ (e.toString(16)));
