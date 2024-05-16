//      BASICS03-004: Define a constant. Check and print on the console if the constant is positive, negative or zero. Hint: Use ternary operators. How many operators do you need?

let MYCONST = 0; //    constant should be declared in capital letters ?

let checkUp = (MYCONST >= 0) ? (MYCONST == 0 ? 'zero': 'positive number') : 'negative number';  // nested ternary operator to validate positive, negative or zero

console.log(`The constant is ${checkUp}`);





