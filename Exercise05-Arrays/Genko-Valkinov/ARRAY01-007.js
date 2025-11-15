// ARRAY01-007: Write a program to print the positive even elements, greater than a certain 
// const value from one-dimensional array.


const positiveElementsGreaterThan = (input, value) => {
    for(let i=0; i<input.length; i++){
        if(input[i] > value && input[i] > 0){
            console.log(input[i]);
        }
    }
}

positiveElementsGreaterThan([1, 2, 125, 63, 7, 13, 300, -20, -13], 13);


// As a one-liner
//
// const positiveElementsGreaterThan = (input, value) => input.forEach(element => element > value && element > 0 ? console.log(element) : null);