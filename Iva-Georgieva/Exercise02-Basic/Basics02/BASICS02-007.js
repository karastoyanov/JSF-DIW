// BASICS02-007: Declare five variables. Assign them with the randomly chosen emoji 
// characters. Print the UNICODE codes on the console – on one line, separated with 
// commas and space after each comma character.




let x1 = '🔥'.codePointAt(0);
let x2 = '🔰'.codePointAt(0);
let x3 = '🖨️'.codePointAt(0);
let x4 = '🔩'.codePointAt(0);
let x5 = '🕊️'.codePointAt(0);

console.log(x1.toString(16), ",", "", x2.toString(16), ",", "", x3.toString(16), ",", "", x4.toString(16), ",", "", x5.toString(16));


