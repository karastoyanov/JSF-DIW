// Write a program to find the minimum element from one-dimensional array

const myArray = [0,1, 5, 15,-20,];
let minEl = myArray[0];

for ( let i = 0; i<myArray.length; i++){

    if(myArray[i] < minEl){

        minEl = myArray[i];

    }
    
} console.log(`the min. element is ${minEl}`);