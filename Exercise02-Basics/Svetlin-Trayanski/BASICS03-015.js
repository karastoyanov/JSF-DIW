/*Declare a variable. Assign one digit from the range of [1;9]. Print on the 
console the multiplication table with that variable, but in reverse order – first print the 
multiplication with 10, then with 9, etc. Also, print on each line the calculated result from 
the multiplication raised to the second power (на сKеMен 2) */

let digit = 5;

let result1 = digit * 10;
console.log(`${digit} * 10 = ${result1}, ${result1}^2 = ${result1 * result1}`);

let result2 = digit * 9;
console.log(`${digit} * 9 = ${result2}, ${result2}^2 = ${result2 * result2}`);

let result3 = digit * 8;
console.log(`${digit} * 8 = ${result3}, ${result3}^2 = ${result3 * result3}`);

let result4 = digit * 7;
console.log(`${digit} * 7 = ${result4}, ${result4}^2 = ${result4 * result4}`);

let result5 = digit * 6;
console.log(`${digit} * 6 = ${result5}, ${result5}^2 = ${result5 * result5}`);

let result6 = digit * 5;
console.log(`${digit} * 5 = ${result6}, ${result6}^2 = ${result6 * result6}`);

let result7 = digit * 4;
console.log(`${digit} * 4 = ${result7}, ${result7}^2 = ${result7 * result7}`);

let result8 = digit * 3;
console.log(`${digit} * 3 = ${result8}, ${result8}^2 = ${result8 * result8}`);

let result9 = digit * 2;
console.log(`${digit} * 2 = ${result9}, ${result9}^2 = ${result9 * result9}`);

let result10 = digit * 1;
console.log(`${digit} * 1 = ${result10}, ${result10}^2 = ${result10 * result10}`);
