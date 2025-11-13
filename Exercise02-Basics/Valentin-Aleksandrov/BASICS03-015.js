/* Declare a variable. Assign one digit from the range of [1;9]. Print on the 
console the multiplication table with that variable, but in reverse order – first print the 
multiplication with 10, then with 9, etc. Also, print on each line the calculated result 
from the multiplication raised to the second power (на степен 2).*/

let n = 4;

let tenMultipl = n * 10;
let nineMultipl = n * 9;
let eightMultipl = n * 8;
let sevenMultipl = n * 7;
let sixMultipl = n * 6;
let fiveMultipl = n * 5;
let fourMultipl = n * 4;
let threeMultipl = n * 3;
let twoMultipl = n * 2;
let oneMultipl = n * 1;

console.log(`${tenMultipl} ... to the power of two ${tenMultipl ** 2}`);
console.log(`${nineMultipl} ... to the power of two ${nineMultipl ** 2}`);
console.log(`${eightMultipl} ... to the power of two ${eightMultipl ** 2}`);
console.log(`${sevenMultipl} ... to the power of two ${sevenMultipl ** 2}`);
console.log(`${sixMultipl} ... to the power of two ${sixMultipl ** 2}`);
console.log(`${fiveMultipl} ... to the power of two ${fiveMultipl ** 2}`);
console.log(`${fourMultipl} ... to the power of two ${fourMultipl ** 2}`);
console.log(`${threeMultipl} ... to the power of two ${threeMultipl ** 2}`);
console.log(`${twoMultipl} ... to the power of two ${twoMultipl ** 2}`);
console.log(`${oneMultipl} ... to the power of two ${oneMultipl ** 2}`);
