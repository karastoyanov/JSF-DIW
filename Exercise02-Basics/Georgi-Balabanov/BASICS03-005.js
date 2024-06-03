/* BASICS03-005: Declare three variables and assign them with three randomly selected integer 
numbers. Print on the console those two of them, which have the biggest sum. Hint: Use 
the ternary operators.*/
let num = 5
let num1 = 6
let num2 = 8
let biggestSum = num + num1 > num + num2 ? num + num1 : num + num2;
console.log(biggestSum)