/* Define a variable and initialize it with a number from the interval [0,23] (this 
will be interpreted as an hour). Write an appropriate congratulations message, based on 
the variable’s value. */

let currentTime = 18;

if (currentTime >= 0 && currentTime < 11) {
    console.log(`Good morning!`);
} else if (currentTime >= 11 && currentTime < 18) {
    console.log(`Good day!`);
} else {
    console.log(`Good evening!`);
}
