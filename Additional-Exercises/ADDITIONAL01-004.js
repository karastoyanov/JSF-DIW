/*

Define a string variable containing a sentence. 
Using string literals print the first and the last character of the string on the console and their ASCII codes.

*/

let sent = "The horse jumped into the river.";

let sentL1 = sent.charAt(0);
let sentL2 = sent.at(-1);

console.log(`Char is ${sentL1} and the code is ${sentL1.charCodeAt()} and char ${sentL2} has a code of ${sentL2.charCodeAt()}`);
