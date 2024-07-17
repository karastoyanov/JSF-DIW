/*Write a program that calculates the Body Mass Index (BMI) and categorizes it. 
The formula for BMI is: weight / (height * height). Define three categories by your own 
discretion*/

let weight = 75;
let height = 1.80;

let bmi = weight / (height * height);
console.log(bmi);

if(bmi > 0 && bmi < 33){
    console.log(`${bmi} categorises as normal`);
} else if(bmi >= 33 && bmi < 66){
    console.log(`${bmi} categorises as fat`);
} if(bmi >= 66 && bmi <= 100){
    console.log(`${bmi} categorises as overweight`);
}