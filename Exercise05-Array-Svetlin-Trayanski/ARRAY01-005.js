/*Write a program to print only the elements greater than or equal to a certain
value, from one-dimensional array.*/

const arr = [1,3,4,7,8,-3,5,-7];

for (let i = 0; i < arr.length; i++){
    if (arr[i] >= 3) {
        console.log(arr[i]);
    }
}
