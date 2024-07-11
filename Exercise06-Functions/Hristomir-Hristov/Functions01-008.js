/*
 Write a function that calculates the average value of a numbers in array 
*/

let sum = 0;
let avg = 0;

function arrAvg(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        avg = sum / arr.length;
    }
    console.log(avg);
}

arrAvg([10, 20, 30, 40]);