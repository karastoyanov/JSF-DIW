/*
LOOPS01-006: Define a variable and initialize it with a number from the interval [0,23] (this 
will be interpreted as an hour). Write an appropriate congratulations message, based on 
the variable’s value.
*/

let hour = 2;

if (hour >= 0 && hour < 6) {
    console.log(`Go back to bed!`);
} else if (hour >= 6 && hour < 10) {
    console.log(`Good morning!`);
} else if (hour >= 10 && hour < 18) {
    console.log(`Good afternoon!`);
} else if (hour >= 18 && hour <= 23) {
    console.log(`Good evening!`);
}