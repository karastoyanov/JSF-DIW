/* BASICS02-007: Declare five variables. Assign them with the randomly chosen emoji 
characters. Print the UNICODE codes on the console – on one line, separated with 
commas and space after each comma character. */

let fire;
let flag;
let printer;
let nutANDbolt;
let dove;


fire = '🔥'.codePointAt(0);
flag = '🔰'.codePointAt(0);
printer = '🖨️'.codePointAt(0);
nutANDbolt = '🔩'.codePointAt(0);
dove = '🕊️'.codePointAt(0);

console.log(fire.toString(16), ",", flag.toString(16), ",", printer.toString(16), ",", nutANDbolt.toString(16), ",", dove.toString(16));


