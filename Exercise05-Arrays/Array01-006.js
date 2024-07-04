//  ARRAY01-006: Write a program to print the odd elements greater than a certain const value from one-dimensional array

let myArray = [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10];

const oddEl = -9;

for(let i = 0; i <=myArray.length; i++){
    if(myArray[i] % 2 != 0 && myArray[i] >= oddEl){
        console.log(myArray[i])
    }
}