/*
BASICS02-013: Declare two variables. Assign them with one English alphabet character and 
one number character. Compare them with the “greater than” operator (>) and print on 
the console the result. Can you describe the result?
*/

let char221 = 'Z';
let char222 = 6;

console.log(char221 > char222);

/*
'Z' is a string.

When compare a string with a number ('Z' > 6), JavaScript tries to turn the string into a number.

But 'Z' is not a number, so the conversion gives NaN.

Now the comparison become - NaN > 6.

In JavaScript, any comparison with NaN is always false.
*/