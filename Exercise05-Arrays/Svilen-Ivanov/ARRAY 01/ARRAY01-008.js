/*
ARRAY01-008: Write a program to create and print one-dimensional array in reverse order.
*/


const arr = [65, 87, -95, -63, -84, 0, 122, 68, 144];

//Solution 1
for (let i = arr.length-1; i >= 0; i--) {
    console.log(arr[i]);
}

//Solution 2
for (let i = 1; i <= arr.length; i++) {
    console.log(arr[arr.length-i]);
}