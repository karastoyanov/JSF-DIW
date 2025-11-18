"use strict"
/*
FUNCTIONS01-001: Write a function that takes two numbers as arguments and returns the 
largest of them
*/

function largestNum (num1, num2) {
    if (num1 > num2){
      console.log(num1);
    } else if (num1 < num2) {
        console.log(num2);
    } else {
        console.log(`The numbers are equal`);
    }
} 

largestNum(6, 4);
largestNum(3, 10);
largestNum(2, 2);