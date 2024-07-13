/* You have the following excerpt of a JavaScript code:
let a = 1;
let b = 3;
let result = a**++b/b++**a;
Try to calculate the value of the result variable, without executing the code. */

let a = 1;
let b = 3;
let result = a**++b/b++**a; // ++b = + 1 =>  b = 4,
                            // b++ = +1 => b = 5,
                            // a** = 1^4 => a = 1,
                            // **a = 4^1 => a = 4,

console.log(result)