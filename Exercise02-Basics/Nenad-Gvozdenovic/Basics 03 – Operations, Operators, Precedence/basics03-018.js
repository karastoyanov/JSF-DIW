/*
BASICS03-018: Write a JavaScript program to convert km/h into km/min. Print on the console 
an appropriate message.
*/

let S = 100;        //enter your speed in KM/h
const H = 60;       //conversion H >> min

let speed = (S/H);  //calculation formula

console.log("your speed is "+speed+"in KM/min")