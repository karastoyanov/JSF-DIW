// ARRAY01-005: Write a program to print only the elements greater than or equal to a certain value, from one-dimensional array.

const arr = [678, 9000, 654, 345, 8, 0, 700, 3, 1500, 7001,98];

const certainValue = 700;

for (i = 0; i <= arr.length-1; i++) {
    if (arr[i] >= certainValue) {
        console.log(arr[i]);
    }
}