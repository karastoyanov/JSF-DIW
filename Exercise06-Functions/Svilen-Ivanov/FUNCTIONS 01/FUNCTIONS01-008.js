/*
FUNCTIONS01-008: Write a function that calculates the average value of a numbers in array
*/

function averageOfArr(arr) {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    console.log(`The average value of the numbers in the array is ${average}`);
    return;
}

averageOfArr([1, 2, 3, 4, 5]);