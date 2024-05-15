//BASICS02-008: Declare five variables. Assign them with the randomly chosen emoji characters. Print the UNICODE codes in hex format on the console – on different lines.

let a = '😀';
let b = '🙃';
let c = '🤩';
let d = '😛';
let e = '😎';

console.log(a.codePointAt(0).toString(10));
console.log(b.codePointAt(0).toString(10));
console.log(c.codePointAt(0).toString(10));
console.log(d.codePointAt(0).toString(10));
console.log(e.codePointAt(0).toString(10));