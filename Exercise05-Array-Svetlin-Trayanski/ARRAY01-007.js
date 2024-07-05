/*Write a program to print the positive even elements, greater than a certain
const value from one-dimensional array*/

const arr = [1,3,4,7,8,-3,5,-7];

for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
        if (arr[i] >= 3){
        console.log(arr[i]);
        }
    }
}