//Count the amount of elements (numbes) in a two-dimensional array, who are bellow a certain threshold.

let matrix = [
    [11, 22, 33],
    [44, 55, 66],
    [77, 88, 99]
];
let threshold = 47;
let meetThresholdCount = 0;

for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix.length; k++) {
        if (matrix[i][k] < threshold) {
            meetThresholdCount++
        }
    }
    
}

console.log(meetThresholdCount);