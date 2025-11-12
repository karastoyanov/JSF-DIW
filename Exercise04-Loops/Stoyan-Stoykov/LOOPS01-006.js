/**
 * LOOPS01-006: Define a variable and initialize it with a number from the interval [0,23] (this
  will be interpreted as an hour). Write an appropriate congratulations message, based on
  the variable’s value.
 */

let hour = 11;

if (hour >= 0 && hour < 9) {
  console.log("GOood morning");
} else if (hour < 12) {
  console.log("Sleepeing late, huh");
} else if (hour < 18) {
  console.log("Good afternoon");
} else if (hour < 24) {
  console.log("Good Evenening");
} else {
  console.log("Invalid hour");
}
