/* BASICS02-012: Declare two variables. Assign them with two English alphabet characters –
one in capital and the other one in lowercase. Compare them with the “lower than” 
operator (<) and print on the console the result. Can you describe the result? */

let capitalChar;
let lowercaseChar;


capitalChar = "J";
lowercaseChar = "g";

let result = lowercaseChar < capitalChar;

console.log(result);


/* Iterpretator compares the position of both characters in ASCII table.
"J" position is 74(10), "g" postion is 103(10) - - > 74 < 103.
Capital letters are before lowercase letters in the table and have smaller number. */