/*

Print all even numbers from the string:
The number 28469 is not so big.
Hint 1: Check the remainder of integer division by two.
Hint 2: Use the ternary operator.

*/

let strA = "The number 28469 is not so big.";

let intA = strA.substring(11,16);

(intA.charAt(0) % 2 == 0) && console.log(intA.charAt(0));
(intA.charAt(1) % 2 == 0) && console.log(intA.charAt(1));
(intA.charAt(2) % 2 == 0) && console.log(intA.charAt(2));
(intA.charAt(3) % 2 == 0) && console.log(intA.charAt(3));
(intA.charAt(4) % 2 == 0) && console.log(intA.charAt(4));
