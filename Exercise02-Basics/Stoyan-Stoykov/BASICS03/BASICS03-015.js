/**
 * BASICS03-015: Declare a variable. Assign one digit from the range of [1;9]. Print on the 
  console the multiplication table with that variable, but in reverse order – first print the 
  multiplication with 10, then with 9, etc. Also, print on each line the calculated result 
  from the multiplication raised to the second power (на степен 2).
 */

let digit = 4;
for (let i = 10; i >= 1; i--) {
  let res = digit * i;
  console.log(`${digit} x ${i} = ${res}, squared = ${res ** 2}`);
}

