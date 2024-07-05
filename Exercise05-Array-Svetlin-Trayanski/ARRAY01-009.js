/*Write a program to find the average value from one-dimensional array, filled in
with numbers. Create a new array, having the elements from the first one but each of
them increased with the average value.*/

const arr = [1,3,4,7,8,-3,5,-7];
let sum = 0;

    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
}
let average = sum / arr.length;
let arr1 = [];
    for (let i = 0; i < arr.length; i++){
        arr1.push(arr[i] + average);
    }
console.log(arr1);