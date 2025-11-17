"use strict"
/* 
LOOPS01-006: Define a variable and initialize it with a number from the interval [0,23] (this 
will be interpreted as an hour). Write an appropriate congratulations message, based on 
the variable’s value.
*/

let hour = 23; 

if (hour >= 6 && hour < 12) {
  console.log("Good morning!");
} else if (hour >= 12 && hour < 17) {
  console.log("Good afternoon!");
} else if (hour >= 17 && hour < 23) {
  console.log("Good evening!");
} else {
  console.log("Good night!");
}

