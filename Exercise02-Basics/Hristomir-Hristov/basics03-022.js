/*

You have the following excerpt of a JavaScript code:
let a = 1;
let b = 3;
let result = a**++b/b++**a;
Try to calculate the value of the result variable, without executing the code.

*/

/*

We increment b by 1 (=4), we raise a to the power of b (1*1*1*1=1), b uses the current value 4, 
before incrementing it again to 5, we raise it to power of a (4 to power of 1 = 4). Finally, divide 1 by 4 and we get 0.25

*/