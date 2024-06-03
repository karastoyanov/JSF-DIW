/*BASICS03-015: Declare a variable. Assign one digit from the range of [1;9]. Print on the 
console the multiplication table with that variable, but in reverse order – first print the 
multiplication with 10, then with 9, etc. Also, print on each line the calculated result from 
the multiplication raised to the second power (на сKеMен 2)
 */
let number = 5;

multiWith10 = number * 10;
multiWith9 = number * 9;
multiWith8 = number * 8;
multiWith7 = number * 7;
multiWith6 = number * 6;
multiWith5 = number * 5;
multiWith4 = number * 4;
multiWith3 = number * 3;
multiWith2 = number * 2;
multiWith1 = number * 1;


console.log(number + ' * 10 = ' + multiWith10,'Raised to the second power: '+Math.pow(multiWith10,2))
console.log(number + ' * 9 = ' + multiWith9,' Raised to the second power: '+Math.pow(multiWith9,2))
console.log(number + ' * 8 = ' + multiWith8,' Raised to the second power: '+Math.pow(multiWith8,2))
console.log(number + ' * 7 = ' + multiWith7,' Raised to the second power: '+Math.pow(multiWith7,2))
console.log(number + ' * 6 = ' + multiWith6,' Raised to the second power: '+Math.pow(multiWith6,2))
console.log(number + ' * 5 = ' + multiWith5,' Raised to the second power: '+Math.pow(multiWith5,2))
console.log(number + ' * 4 = ' + multiWith4,' Raised to the second power: '+Math.pow(multiWith4,2))
console.log(number + ' * 3 = ' + multiWith3,' Raised to the second power: '+Math.pow(multiWith3,2))
console.log(number + ' * 2 = ' + multiWith2,' Raised to the second power: '+Math.pow(multiWith2,2))
console.log(number + ' * 1 = ' + multiWith1,'  Raised to the second power: '+Math.pow(multiWith1,2))