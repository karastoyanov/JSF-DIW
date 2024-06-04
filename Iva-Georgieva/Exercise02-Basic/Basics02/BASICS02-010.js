/* BASICS02-010: Declare five variables. Assign them with the randomly chosen emoji 
characters. For each of the variables - print the UNICODE code in binary, octal, decimal,
and hex format on one line, separated with comas and space after it. */

let t1 = '🚵'.codePointAt(0);
let t2 = '🛋️'.codePointAt(0);
let t3 = '🚿'.codePointAt(0);
let t4 = '🙅'.codePointAt(0);
let t5 = '🚀'.codePointAt(0);

console.log(t1.toString(2), ",", "", t1.toString(8), ",", "", t1.toString(10), ",", "", t1.toString(16));
console.log(t2.toString(2), ",", "", t2.toString(8), ",", "", t2.toString(10), ",", "", t2.toString(16));
console.log(t3.toString(2), ",", "", t3.toString(8), ",", "", t3.toString(10), ",", "", t3.toString(16));
console.log(t4.toString(2), ",", "", t4.toString(8), ",", "", t4.toString(10), ",", "", t4.toString(16));
console.log(t5.toString(2), ",", "", t5.toString(8), ",", "", t5.toString(10), ",", "", t5.toString(16));