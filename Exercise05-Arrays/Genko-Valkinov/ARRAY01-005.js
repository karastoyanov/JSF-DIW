// ARRAY01-005: Write a program to print only the elements greater than or equal to a certain 
// value, from one-dimensional array.

const greaterThanOrEqualTo = (input, value) => {
    for(let i=0; i<input.length; i++){
        if(input[i] >= value){
            console.log(input[i]);
        }
    }
}

greaterThanOrEqualTo([1, 2, 125, 63, 7, 13, -20, -13], 13);

// As a one-liner
//
// const greaterThanOrEqualTo = (input, value) => input.forEach(element => element >= value ? console.log(element) : null);