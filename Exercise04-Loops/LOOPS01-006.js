/* Define a variable and initialize it with a number from the interval [0,23] (this
will be interpreted as an hour). Write an appropriate congratulations message, based on
the variable’s value. */

let hour = 22;

let message;

if (hour >= 0 && hour < 6) {
    message = "Good night!";
} else if (hour >= 6 && hour < 12) {
    message = "Good morning!";
} else if (hour >= 12 && hour < 18) {
    message = "Good afternoon!";
} else {
    message = "Good evening!";
}

console.log("Hour: " + hour);
console.log("Congratulations message: " + message);