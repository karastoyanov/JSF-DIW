/*

Declare two variables. Assign them with two English alphabet characters –
one in capital and the other one in lowercase. Compare them with the “lower than”
operator (<) and print on the console the result. Can you describe the result?

*/

let letterA, letterB;

letterA = "T";
letterB = "o";

let result = letterA < letterB;
console.log(result);

/* The uppercase letters will be "lower" than the lowercase letters, since the uppercase letters appear bofore the lowercase ones
on the ASCII table and therefore have a lower code number. */