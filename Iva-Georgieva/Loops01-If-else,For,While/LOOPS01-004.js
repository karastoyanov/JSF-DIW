/* Write a program that calculates the Body Mass Index (BMI) and categorizes it.
The formula for BMI is: weight / (height * height). Define three categories by your own
discretion. */

const weight = 1000;
const height = 1.64

let underWeight = 30;
let normalWeight = 100;
let overWeight = 150

let BMI = weight / (height * height);

if (BMI <= underWeight) {
    console.log(` Dude, eat more you are ${BMI}`);
} else if ( BMI > underWeight && BMI < normalWeight) {
    console.log(`Dude, that is good, you are ${BMI}`)
} else if ( BMI > normalWeight && BMI < overWeight ) {
    console.log(` Dude, eat less, you are ${BMI}`);
} else {
    console.log(`Dude, you need to pay attention you are ${BMI}`)
}

