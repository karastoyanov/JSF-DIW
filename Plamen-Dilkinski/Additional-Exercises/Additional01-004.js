/*  ADDITIONAL01-004:Define a string variable containing a sentence. 
    Using string literals print the first and the last character of the string on the console and their ASCII codes.
*/

let someSent = "Some sentence that is typed here!"

let firstSent = someSent.charAt();
let sentLast = someSent.at(-1);

console.log(`Char is ${firstSent} and the code is ${firstSent.charCodeAt()} and char ${sentLast} has code of ${sentLast.charCodeAt()}`);