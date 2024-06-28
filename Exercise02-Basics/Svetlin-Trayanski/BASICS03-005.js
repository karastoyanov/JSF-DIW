/* Declare three variables and assign them with three randomly selected integer 
numbers. Print on the console those two of them, which have the biggest sum. Hint: Use 
the ternary operators */

let number1 = 100;
let number2 = 200;
let number3 = 150;

let result = (number1 + number2 >= number1 +number3) && (number1 + number2 >= number2 +number3) ?  `${number1} ${number2}`:
             (number1 + number3 >=number1 + number2) && (number1 + number3 >= number2 + number3) ? `${number1} ${number3}`:
                                                                                                   `${number2} ${number3}` 
console.log(result)