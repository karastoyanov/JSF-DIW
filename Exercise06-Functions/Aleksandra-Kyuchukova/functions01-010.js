"use strict"
/*
FUNCTIONS01-010: Write a function that takes an array as an argument and returns a new 
array with all false values removed.
*/

function falseValRemoved(arr) {
    const newArr = [];

    for (let element of arr) {
        if (element) {
            newArr.push(element);
        }
    } 
    
    console.log(newArr);
}

FalseValRemoved([0, 1, 4, null, -1, 9]);
