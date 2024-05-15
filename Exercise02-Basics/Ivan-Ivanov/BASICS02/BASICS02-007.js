/*BASICS02-007: Declare five variables. Assign them with the randomly chosen emoji
characters. Print the UNICODE codes on the console – on one line, separated with
commas and space after each comma character.
*/

let a = '😀';
let b = '🙃';
let c = '🤩';
let d = '😛';
let e = '😎';

console.log(a.codePointAt(0).toString(16) +", "+ b.codePointAt(0).toString(16) +", "+ (c.codePointAt(0).toString(16)) +", "+ (d.codePointAt(0).toString(16)) +", "+ (e.codePointAt(0).toString(16)));
