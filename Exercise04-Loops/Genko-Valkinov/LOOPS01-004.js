// LOOPS01-004: Write a program that calculates the Body Mass Index (BMI) and categorizes it. 
// The formula for BMI is: weight / (height * height). Define three categories by your own 
// discretion.


let underweight = 18.5;
let normal = 24.9;
let overweight = 25;

let weight = 84;        // kilograms
let height = 168;       // centimeters
height = height / 100   // convert to meters

let bmi = weight / (height * height);

if(bmi > overweight) {
    console.log(`You are overweight => BMI: ${bmi.toFixed(3)}`);
}else if(bmi > underweight){
    console.log(`You are normal weight => BMI ${bmi.toFixed(3)}`);
}else if(bmi < underweight) {
    console.log(`You are underweight => BMI ${bmi.toFixed(3)}`);
}