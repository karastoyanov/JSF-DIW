// BASICS02-008: Declare five variables. Assign them with the randomly chosen emoji 
// characters. Print the UNICODE codes in hex format on the console – on diWerent lines.

let l = '🔊'.codePointAt(0);                           
let b = "🔆".codePointAt(0);                           
let s = "🕶️".codePointAt(0);                           
let sp = "🕷️".codePointAt(0); 
let h = "🔨".codePointAt(0);                         

console.log(l.toString(16));
console.log(b.toString(16));
console.log(s.toString(16));
console.log(sp.toString(16));
console.log(h.toString(16));