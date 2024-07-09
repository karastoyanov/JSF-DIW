/* FUNCTIONS01-011: Write a function that takes a string as an argument and returns the string
with the first letter of each word capitalized. */

function firstCapital(string) {

let theString = string.split(" ");
let firstChar = 0;
for ( let i = 0; i<theString.length; i++){
    if(firstChar = theString[i][0]) {

        console.log(firstChar.toUpperCase());
    }

}
} console.log(firstCapital("Another task from JavaScript course to be solved"));