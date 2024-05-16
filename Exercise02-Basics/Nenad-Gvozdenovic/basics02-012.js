/*
BASICS02-012: Declare two variables. Assign them with two English alphabet characters –
one in capital and the other one in lowercase. Compare them with the “lower than” 
operator (<) and print on the console the result. Can you describe the result? 
*/

let a = "A";
let b = "b";

console.log(b < a);

// result is based on the ASCII symbol code value, in this case "A" = 65 and "b" = 95 so: b < a = false 