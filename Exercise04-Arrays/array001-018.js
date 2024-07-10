//: Find the sum of all numbers in a table. Assume that the table contains only numbers.

let table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 10]
];
let sum = 0;

for (let i = 0; i < table.length; i++) {
    for (let k = 0; k < table.length; k++) {
        
        sum += table[i][k]
    }
    
}

console.log(sum);