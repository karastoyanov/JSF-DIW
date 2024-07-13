/*
Define a variable and initialize it with a number from the interval [0,23] (this
will be interpreted as an hour). Write an appropriate congratulations message, based on
the variable’s value.
*/
let hour = 16.30;
if (hour >= 0 && hour < 12) {
    console.log(`Good Morning!`);
} else if (hour >= 12 && hour < 18) {
    console.log(`Good Day!`);
} else {
    console.log(`Good Evening!`);
}
