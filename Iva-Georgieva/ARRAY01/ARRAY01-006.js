// ARRAY01-006: Write a program to print the odd elements greater than a certain const value 
// from one-dimensional array


const arr = [678, 9000, 654, 345, 8, 0, 787, 3, 1500, 7000, 98];

const certainValue = 700;
let num = arr[0];

for (i = 0; i <= arr.length-1; i++) {
    if (arr[i] >= certainValue) {
        if (arr[i] % 2 != 0 )
        console.log(arr[i]);
    }
}
    


