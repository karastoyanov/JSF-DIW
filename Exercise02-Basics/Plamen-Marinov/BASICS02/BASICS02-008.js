/*
BASICS02-008: Declare five variables. Assign them with the randomly chosen emoji 
characters. Print the UNICODE codes in hex format on the console – on different lines.
*/

let emoj20 = '🧠';
let emoj21 = '🦊';
let emoj22 = '🍩';
let emoj23 = '🚴';
let emoj24 = '🎧';


console.log(emoj20.codePointAt(0).toString(16));
console.log(emoj21.codePointAt(0).toString(16));
console.log(emoj22.codePointAt(0).toString(16));
console.log(emoj23.codePointAt(0).toString(16));
console.log(emoj24.codePointAt(0).toString(16));