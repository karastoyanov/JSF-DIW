/*
BASICS03-019: Write a JavaScript program to convert km/h into m/s. Print on the console an 
appropriate message.
*/

let S = 100;         //enter your speed in KM/h
const T = 3600;      // hours to seconds
const D = 1000;      //conversion KM >> Meter

let speed = ((S*D)/T);  //calculation formula

console.log("your speed is "+speed+"in M/sec");