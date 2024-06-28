/*
Write a program that calculates the Body Mass Index (BMI) and categorizes it.
The formula for BMI is: weight / (height * height). Define three categories by your own
discretion.
*/
let weight = 105;
let height = 1.80;

let bmi1 = 15;
let bmi2 = 25;
let bmi3 = 35;

let bmiCalories = weight / (height * height);

if (bmiCalories < bmi1) {
    console.log(`Underweight: ${bmiCalories} BMI`);
} else if (bmiCalories >= bmi1 && bmiCalories < bmi2) {
    console.log(`Normal: ${bmiCalories} BMI`);
} else if (bmiCalories >= bmi2 && bmiCalories < bmi3) {
    console.log(`Above normal: ${bmiCalories} BMI`);
} else {
    console.log(`Overweight: ${bmiCalories} BMI`);
}
