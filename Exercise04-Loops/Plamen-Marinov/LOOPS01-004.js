/*
LOOPS01-004: Write a program that calculates the Body Mass Index (BMI) and categorizes it. 
The formula for BMI is: weight / (height * height). Define three categories by your own 
discretion.
*/

let weight = 80;
let height = 1.76;

const Bmi = weight / (height * height);

if (Bmi > 30) {
    console.log(`Your BMI is ${Bmi.toFixed(2)} - you are overweight.`);
} else if (Bmi >= 23 && Bmi <= 30) {
    console.log(`Your BMI is ${Bmi.toFixed(2)} - you have a normal weight.`);
} else {
    console.log(`Your BMI is ${Bmi.toFixed(2)} - you are underweight.`);
}