//Declare five variables. Assign them with the randomly chosen emoji 
//characters. Print the UNICODE codes on the console – on one line, separated with 
//commas and space after each comma character.

let code1 = '😀'
let code2 = '😄' 
let code3 = '😉'
let code4 = '😎'
let code5 = '🤗'

console.log(`${code1.codePointAt(0)}, ${code2.codePointAt(0)}, ${code3.codePointAt(0)}, ${code4.codePointAt(0)}, ${code5.codePointAt(0)}`)