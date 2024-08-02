/*  Define a variable and initialize it with a number from the interval [0,23] (this 
will be interpreted as an hour). Write an appropriate congratulations message, based on 
the variable’s value. */

let hour = 23;

if (hour >= 5 && hour <= 10) {
    console.log("Good Morning");
} else if (hour >10  && hour < 18) {
    console.log("Godd day");
} else if (hour >= 18 && hour <= 23) {
    console.log("Good evening");
} else {
    console.log("Go to sleep");
}

    

   