"use strict"
/* 
LOOPS01-004: Write a program that calculates the Body Mass Index (BMI) and categorizes it. 
The formula for BMI is: weight / (height * height). Define three categories by your own 
discretion.
*/

let weight = 60;
let height = 1.8;
let bmi = (weight / (height * height)).toFixed(2);

if (bmi < 18.5) {
  console.log(`Your BMI is ${bmi}, status: Underweight.`);
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log(`Your BMI is ${bmi}, status: Optimum range.`);
} else {
  console.log(`Your BMI is ${bmi}, status: Overweigh.`);
}