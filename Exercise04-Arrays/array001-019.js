// Count the even numbers in a two-dimensional array. Calculate the 
//percentage of this amount from the total amount of numbers in the array.

let table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let evenNumberCount = 0;
let numberCount = 0;

for (let i = 0; i < table.length; i++) {
    for (let k = 0; k < table.length; k++) {

        numberCount++;
        if (table[i][k] % 2 == 0) {
            evenNumberCount++;   
        }
    }
}

let percentage = (evenNumberCount / numberCount) * 100;
console.log(percentage.toFixed(2));