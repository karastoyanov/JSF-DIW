// Write a program that calculates the Body Mass Index (BMI) and categorizes it. 
// The formula for BMI is: weight / (height * height). Define three categories by your own
// discretion.

let weight = 44;
let height = 1.64;

let BMI = weight / (height * height);

console.log(BMI);

if (BMI < 18.5) {
    console.log(`Your BMI is underweight.`)
} else if (BMI < 25) {
    console.log("Your BMI is normal weight.")
} else if (BMI < 30) {
    console.log('Your BMI is overweight.')
} else {
    console.log("Your BMI is obese. :'(")
}