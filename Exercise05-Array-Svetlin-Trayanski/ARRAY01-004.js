/*Write a program to print only the positive elements from one-dimensional
array.*/

const arr = [1,3,4,7,8,-3,5,-7];

for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0) {
        console.log(arr[i]);
    }
}

