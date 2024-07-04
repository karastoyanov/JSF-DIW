//  ARRAY01-004: Write a program to print only the positive elements from one-dimensional array.

let myArray = [0, 3555, 1, 5, 15, -20, -5,-10,10,12,-12,0, 5, 266, -3, 56];
let myPosNum = [];
let arrNegatives = false;

for (let i = 0; i <= myArray.length; i++) {
    if (myArray[i] > 0) {
        myPosNum.push(myArray[i]);  // pushing to myPosNum only numbers that are positive
    } else if (myArray[i] < 0) {
        arrNegatives = true;
    }
}
if (myPosNum.length > 0) {
    console.log(myPosNum)           // check for content in myPosNum, only then printing it
}else{
    console.log("There are no positive numbers in the array!");
}