//Declare five variables. Assign them with the randomly chosen emoji 
//characters. Print the UNICODE codes in hex format on the console – on diWerent lines

let code1 = '😀';
let code2 = '😄' ;
let code3 = '😉';
let code4 = '😎';
let code5 = '🤗';

console.log(code1.codePointAt(0).toString(16))
console.log(code2.codePointAt(0).toString(16))
console.log(code3.codePointAt(0).toString(16))
console.log(code4.codePointAt(0).toString(16))
console.log(code5.codePointAt(0).toString(16))