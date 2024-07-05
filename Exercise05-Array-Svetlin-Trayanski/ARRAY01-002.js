/*Write a program to find the maximum element from a one-dimensional array*/

const arr = [1,3,4,7,8];
let maxElement = arr[0];

for (let i = 1; i < arr.length; i++){
    if (arr[i] > maxElement) {
        maxElement = arr[i];
    }
}
console.log(maxElement);