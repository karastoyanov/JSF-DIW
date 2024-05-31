//Declare five variables. Assign them with the randomly chosen emoji 
//characters. For each of the variables - print the UNICODE code in binary, octal, decimal,
//and hex format on one line, separated with comas and space after it

let code1 = '😀';
let code2 = '😄' ;
let code3 = '😉';
let code4 = '😎';
let code5 = '🤗';

console.log(`${code1.codePointAt(0).toString(2)}, ${code1.codePointAt(0).toString(8)}, ${code1.codePointAt(0)}, ${code1.codePointAt(0).toString(16)} `)
console.log(`${code2.codePointAt(0).toString(2)}, ${code2.codePointAt(0).toString(8)}, ${code2.codePointAt(0)}, ${code2.codePointAt(0).toString(16)} `)
console.log(`${code3.codePointAt(0).toString(2)}, ${code3.codePointAt(0).toString(8)}, ${code3.codePointAt(0)}, ${code3.codePointAt(0).toString(16)} `)
console.log(`${code4.codePointAt(0).toString(2)}, ${code4.codePointAt(0).toString(8)}, ${code4.codePointAt(0)}, ${code4.codePointAt(0).toString(16)} `)
console.log(`${code5.codePointAt(0).toString(2)}, ${code5.codePointAt(0).toString(8)}, ${code5.codePointAt(0)}, ${code5.codePointAt(0).toString(16)} `)