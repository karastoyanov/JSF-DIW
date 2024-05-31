/*

Declare one variable, assign integer number. Check if the variable contains
an even number. Print on the console appropriate message.

*/

let number;
number = 7;

let numCheck = (number % 2 == 0) ? "The number " +number + " is even." : "The number " +number + " is odd.";
console.log(numCheck);