/**
 * DTYPES02-001: Define two number variables without decimal, two with decimal, two number
  variables in exponential notation; two variables in exponential notation (but with 4 digits
  for the whole part and 7 digits for the fractional part (остатък)).
 */

let num1 = 42;
let num2 = 1000;

let num3 = 3.14;
let num4 = 0.001;

let num5 = 1.2e3; // 1.2 * 10^3 = 1200
let num6 = 5.67e-4; // 5.67 * 10^-4 = 0.000567

let num7 = 1234.5678901; // 4 digits whole part, 7 digits fractional part
let num8 = 0.0001234; // 4 digits whole part, 7 digits fractional part

console.log(num1, num2, num3, num4, num5, num6, num7, num8);
