/*
LOOPS01-004: Write a program that calculates the Body Mass Index (BMI) and categorizes it.
The formula for BMI is: weight / (height * height). Define three categories by your own
discretion.
*/

let height = 1.85;
let weight = 40;

let bmi = (weight / (height * height)).toFixed(1);

if (bmi < 18.5) {
    console.log(`${bmi} is in the underweight range`);
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log(`${bmi} is in healthy weight range`);
} else {
    console.log(`${bmi} is in overweight range`);
};