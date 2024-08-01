//FUNCTIONS01-001: Write a function that takes two numbers as arguments and returns the 
//largest of them

let a = 5;
let b = 5;

function compareNumbers(a, b){
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "Numbers are equal";
    }
}

console.log(compareNumbers(a, b));