/*Write a program that determines whether a given number is positive or
negative. */

/*let n = 0;
 
if (n < 0) {
    console.log(`${n} is negative.`);
} else if (n > 0) {
    console.log(`${n} is positive.`);
} else {
    console.log(`${n} is 0`);
}
*/

let number = 2;

switch (true) { 
    case (number > 0):
         console.log(`${number} is positive`);
         break;
    case (number < 0):
         console.log(`${number} is negative`);
         break;
    default: 
         console.log(`${number} is 0`);
         break;
}