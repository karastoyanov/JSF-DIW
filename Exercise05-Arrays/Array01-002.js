// Write a program to find the max. element from one-dimensional array

const myArray = [0,3555,1, 5, 15,-20,];
let maxEl = myArray[0];

for ( let i = 0; i<myArray.length; i++){

    if(myArray[i] > maxEl){

        maxEl = myArray[i];

    }
    
} console.log(`the max. element is ${maxEl}`);