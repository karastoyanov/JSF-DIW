// Find the maximum elements from each row in two-dimensional array.

let array = [[21, 3, 77], [24, 61, -123], [89, -94, 0]];
let max = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (max <= array[i][j]) {
            max = array[i][j];
        }
    }
}

console.log(`The smallest number in this two-dimensional array is ${max}.`);