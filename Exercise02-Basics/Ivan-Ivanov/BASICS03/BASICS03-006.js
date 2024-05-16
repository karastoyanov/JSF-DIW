/*
BASICS03-006: Declare one variable, assign integer number. Check if the variable contains
an even number. Print on the console appropriate message.
*/

let a = 17;

// Check if the number is even
let isEven = (a % 2 === 0);

// Print the result to the console
console.log(`Entered number ${a} is ${isEven ? 'even' : 'odd'}.`);