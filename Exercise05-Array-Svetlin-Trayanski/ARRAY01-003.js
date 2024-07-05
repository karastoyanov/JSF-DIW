/*Write a program to find the difference between the maximum element and
the minimum element from a one-dimensional array*/

const arr = [1,3,4,7,8];
let minElement = arr[0];
let maxElement = arr[0];
for (let i = 1; i < arr.length; i++){
    if (arr[i] < minElement) {
        minElement = arr[i];
    }
}
for (let i = 1; i < arr.length; i++){
    if (arr[i] > maxElement) {
        maxElement = arr[i];
    }
}

console.log(maxElement - minElement);