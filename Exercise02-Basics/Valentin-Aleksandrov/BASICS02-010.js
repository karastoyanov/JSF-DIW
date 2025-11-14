/*  Declare five variables. Assign them with the randomly chosen emoji 
characters. For each of the variables - print the UNICODE code in binary, octal, decimal,
and hex format on one line, separated with comas and space after it. */

let tearsOfJoy = "😂".codePointAt(0);
console.log(tearsOfJoy.toString(2) +', ' + tearsOfJoy.toString(8) +', ' + tearsOfJoy.toString() +', ' + tearsOfJoy.toString(16));

let winkingFace = "😉".codePointAt(0);
console.log(winkingFace.toString(2) +', ' + winkingFace.toString(8) +', ' + winkingFace.toString() +', ' + winkingFace.toString(16));

let angelFace = "😇".codePointAt(0);
console.log(angelFace.toString(2) +', ' + angelFace.toString(8) +', ' + angelFace.toString() +', ' + angelFace.toString(16));

let inLove = "🥰".codePointAt(0);
console.log(inLove.toString(2) +', ' + inLove.toString(8) +', ' + inLove.toString() +', ' + inLove.toString(16));

let moneyFace = "🤑".codePointAt(0);
console.log(moneyFace.toString(2) +', ' + moneyFace.toString(8) +', ' + moneyFace.toString() +', ' + moneyFace.toString(16));
