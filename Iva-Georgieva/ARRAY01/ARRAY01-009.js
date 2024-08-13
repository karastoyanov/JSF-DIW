/* ARRAY01-009: Write a program to find the average value from one-dimensional array, filled in 
 wth numbers. Create a new array, having the elements from the first one but each of 
them increased with the average value. */

const arr = [78, 76, 98, 100, 2];

let sum = 0;
let average = arr[0];
let arrTwo = [];

for (i = 0; i <= arr.length-1; i++) {
    sum += arr[i];
    average = sum / arr.length;

} 
console.log(average);

for (i = 0; i <= arr.length-1; i++) {
    arrTwo [i] = arr[i] + average;  
    
}
console.log(arrTwo);  


