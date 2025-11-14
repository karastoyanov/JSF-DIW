// ARRAY01-006: Write a program to print the odd elements greater than a certain const value 
// from one-dimensional array

const oddElementsGreaterThan = (input, value) => {
    for(let i=0; i<input.length; i++){
        if(input[i] > value && input[i] % 2 !== 0){
            console.log(input[i]);
        }
    }
}

oddElementsGreaterThan([1, 2, 125, 63, 7, 13, 300, -20, -13], 13);


// As a one-liner
//
// const oddElementsGreaterThan = (input, value) => input.forEach(element => element > value && element % 2 !== 0 ? console.log(element) : null);