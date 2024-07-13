/*
Define a variable with a sentence. 
If the ASCII code of the last character of the string is even number print the number on the console, if not, print “
The number is odd. ”.
*/


let sentA = "Ah ti, maimunke mrusna!";

let lastCharCode = sentA.at(-1).charCodeAt();

let result = (lastCharCode % 2 == 0) ? console.log(lastCharCode) : console.log("The number is odd.");
