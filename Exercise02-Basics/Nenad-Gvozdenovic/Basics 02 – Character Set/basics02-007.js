/*
BASICS02-007: Declare five variables. Assign them with the randomly chosen emoji 
characters. Print the UNICODE codes on the console – on one line, separated with 
commas and space after each comma character.
*/

let num1 = "😎".codePointAt(0);
let num2 = "🤣".codePointAt(0);
let num3 = "👌".codePointAt(0);
let num4 = "👍".codePointAt(0);
let num5 = "✌".codePointAt(0);

console.log(num1.toString()+", "+num2.toString()+", "+num3.toString()+", "+num4.toString()+", "+num5.toString());