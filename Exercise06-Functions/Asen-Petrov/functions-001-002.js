//Write a function that takes a single number as an argument and returns true if the number is even, and false otherwise

let num = 5;
function evenOrOdd(a){
    if (a % 2 == 0) {
        return true;
    } else{
        return false;
    }
}

console.log(evenOrOdd(num));