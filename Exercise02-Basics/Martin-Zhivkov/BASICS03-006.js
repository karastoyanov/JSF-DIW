
/*
BASICS03-006: Declare one variable, assign integer number. Check if the variable contains 
an even number. Print on the console appropriate message
*/

let a = 5;
let isEven = a % 2 == 0;
console.log(a + " is " + (isEven ? "even" : "not even"));