/*  LOOPS01-006: Define a variable and initialize it with a number from the interval [0,23] (this will be interpreted as an hour). 
    Write an appropriate congratulations message, based on the variable’s value. 
*/

let theHour = 15;

if (0 <= theHour && theHour < 12) {
    console.log("Good morning!");
} else if (12 <= theHour && theHour <= 19) {
    console.log('Good afternoon!');
} else if (19 < theHour && theHour <= 23) {
    console.log('Good evening!');
} else {

    console.log('The entered number is not within the specified range - [0,23]!')
}