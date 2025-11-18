// ARRAY01-004: Write a program to print only the positive elements from one-dimensional 
// array.

const printOnlyPositives = input => {
    for(let i=0; i<input.length; i++){
        if(input[i] >= 0){
            console.log(input[i]);
        }
    }
}

printOnlyPositives([1, 2, 3, -24, 25, -192, -152, 125]);


// As a one-liner
//
// const printOnlyPositives = input => input.forEach(element => element >= 0 ? console.log(element) : null);

