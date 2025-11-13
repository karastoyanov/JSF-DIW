/**
 * BASICS03-022: You have the following excerpt of a JavaScript code:
        let a = 1;
        let b = 3;
        let result = a**++b/b++**a;
    Try to calculate the value of the result variable, without executing the code
 */

let a = 1, b = 3;

result = a ** ++b / b++ ** a;

console.log(result);

// ++b = 4, b++ = 4 (then becomes 5), so:
// result = 1 ** 4 / 4 ** 1 = 1 / 4 = 0.25