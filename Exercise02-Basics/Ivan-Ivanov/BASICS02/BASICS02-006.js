//BASICS02-006: Declare five variables. Assign them with the randomly chosen emoji characters. Print the UNICODE codes on the console – on different lines.

let a = '😀';
let b = '🙃';
let c = '🤩';
let d = '😛';
let e = '😎';

console.log(a.codePointAt(0).toString(16));
console.log(b.codePointAt(0).toString(16));
console.log(c.codePointAt(0).toString(16));
console.log(d.codePointAt(0).toString(16));
console.log(e.codePointAt(0).toString(16));