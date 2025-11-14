// ARRAY01-009: Write a program to find the average value from one-dimensional array, filled in 
// with numbers. Create a new array, having the elements from the first one but each of 
// them increased with the average value.

const arrayIncreasedByItsAverage = input => {
    let sum = 0;
    for(let i=0; i<input.length; i++){
        sum += input[i];
    }

    return input.map(element => element + (sum / input.length));
}

console.log(arrayIncreasedByItsAverage([10, 20, 30, 40, 50]));