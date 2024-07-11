/*
LOOPS01-006: Define a variable and initialize it with a number from the interval [0,23] (this
will be interpreted as an hour). Write an appropriate congratulations message, based on
the variable’s value.
*/

//Not very clear condition. Can I write "Congratulations, it's 6 o'clock" :)

let hour = 15;


if (hour >= 0 && hour <= 10) {
    console.log(`Good morning.`);
} else if (hour > 10 && hour <= 18) {
    console.log(`Good afternoon.`);
} else if (hour > 18 && hour <= 23) {
    console.log(`Good afternoon.`);
} else {
    console.log(`Invalid hour of the day`);
};
