//  ARRAY01-005: Write a program to print only the elements greater than or equal than a certain value from one-dimensional array.

let theArray = [1,2,3,4,5,6,7,8,9,10,1.5,2.6,4.65];

let checkPointer = 1;

for (let i = 0; i<=theArray.length; i++) {
    if(theArray[i]>= checkPointer){
        console.log(theArray[i])
    }
}
