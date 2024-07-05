/*Write a program to find the minimum element from a one-dimensional array.*/

const arr = [1,3,4,7,8];
let mijElement = arr[0];

for (let i = 1; i < arr.length; i++){
    if (arr[i] < minElement) {
        minElement = arr[i];
    }
}
console.log(minElement);