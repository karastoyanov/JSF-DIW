"use strict"
/*
FUNCTIONS01-008: Write a function that calculates the average value of a numbers in array.
*/

function AverageValue(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let average = sum / arr.length;

    console.log(average);
}

AverageValue([4, 5, 6]);
