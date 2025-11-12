/*
BASICS02-012: Declare two variables. Assign them with two English alphabet characters –
one in capital and the other one in lowercase. Compare them with the “lower than” 
operator (<) and print on the console the result. Can you describe the result?
*/

let char111 = 'A';
let char112 = 'a';

console.log(char111 < char112);

/*
'A' has the Unicode code point 65

'a' has the Unicode code point 97

Since 65 is less than 97, the comparison 'A' < 'a' evaluates to true.
*/