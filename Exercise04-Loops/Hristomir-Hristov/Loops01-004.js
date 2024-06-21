/*
Write a program that calculates the Body Mass Index (BMI) and categorizes it.
The formula for BMI is: weight / (height * height). Define three categories by your own
discretion.
*/

let weight = 82;    // weight in kg
let height = 1.78;  // height in m

let bmi1 = 15;
let bmi2 = 30;
let bmi3 = 45;

let bmiCal = weight / (height * height);

if (bmiCal < bmi1) {
    console.log(`Underweight: ${bmiCal} BMI`);
} else if (bmiCal >= bmi1 && bmiCal < bmi2) {
    console.log(`Normal: ${bmiCal} BMI`);
} else if (bmiCal >= bmi2 && bmiCal < bmi3) {
    console.log(`Above normal: ${bmiCal} BMI`);
} else {
    console.log(`Overweight: ${bmiCal} BMI`);
}