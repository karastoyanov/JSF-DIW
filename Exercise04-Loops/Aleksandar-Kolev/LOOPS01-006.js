// Define a variable and initialize it with a number from the interval
// [0,23] (this will be interpreted as an hour).
// Write an appropriate congratulations message, based on the variable’s value.

let hour = 22;

switch (true) {
    case hour <= 11:
        console.log("Good morning!");
        break;
    case hour <= 18:
        console.log("Good afternoon!");
        break;
    case hour <= 23:
        console.log("Good night!");
        break;
    default:
        console.log("NOT a valid hour.")
}