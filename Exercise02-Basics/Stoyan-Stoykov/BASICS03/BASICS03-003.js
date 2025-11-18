/**
 * BASICS03-003: Declare four variables. On two of them assign integer numbers. The third set 
    with the division remainder. The fourth one set with the quotient (частното -> цялата 
    част от делението). Print on the console the four variables with appropriate 
    description.
 */

let a = 25, b = 4;

let rem = a % b, quo = Math.floor(a / b);

console.log(`a=${a}, b=${b}, remainder=${rem}, quotient=${quo}`);