/* Write a program that calculates the Body Mass Index (BMI) and categorizes it. 
The formula for BMI is: weight / (height * height). Define three categories by your own 
discretion. */

let weight = 80;
let height = 170 / 100;

let resultBMI = weight / (height * height);


let bmi1 = 15;
let bmi2 = 30;
let bmi3 = 45;

if (resultBMI < bmi1) {
    console.log(`Your are underweight: ${resultBMI.toFixed(3)} BMI`);
} else if (resultBMI >= bmi1 && resultBMI < bmi2) {
    console.log(`You are normal: ${resultBMI.toFixed(3)} BMI`);
} else if (resultBMI >= bmi2 && resultBMI < bmi3) {
    console.log(`You are overweight: ${resultBMI.toFixed(3)} BMI`);
} else {
    console.log(`You are obesse: ${resultBMI.toFixed(3)} BMI`);
}
