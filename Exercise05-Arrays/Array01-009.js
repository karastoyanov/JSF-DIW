/*  ARRAY01-009: Write a program to find the average value from one-dimensional array, filled in
with numbers. Create a new array, having the elements from the first one but each of
them increased with the average value
*/

let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumofArray = 0;
finalRes = 0;

for (let i = 0; i < myArray.length; i++) {
    sumofArray += myArray[i];
}
finalRes = sumofArray / myArray.length;
let newArray = myArray;
let modifArray = [];

for (let y = 0; y <=newArray.length;i++){
    newArray[y].push(finalRes);
}
console.log(modifArray);