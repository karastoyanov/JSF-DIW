/*Write a program that calculates the Body Mass Index (BMI) and categorizes it.
The formula for BMI is: weight / (height * height). Define three categories by your own
discretion.*/


let weight = 70;
let height = 1.70;
let bmi = weight / (height * height);
if (bmi <= 18.5){
    console.log(`Underweight range`)
}
else if (bmi > 18.5 && bmi <= 24.9){
    console.log(`Healthy range`)
}
else if (bmi > 24.9 && bmi <= 29.9){
    console.log(`Overweight range`)
}
else {
    console.log(`Outside of scale`)
}
