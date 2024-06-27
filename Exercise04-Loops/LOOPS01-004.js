/* Write a program that calculates the Body Mass Index (BMI) and categorizes it.
The formula for BMI is: weight / (height * height). Define three categories by your own
discretion. */

let weight = 70; 
let height = 1.75; 

if (weight <= 0 || height <= 0) {
    console.log("Please use valid positive numbers for weight and height.");
} else {
    let bmi = weight / (height * height);

    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else {
        category = "Overweight";
    }

    console.log("Your BMI is: " + bmi.toFixed(2));
    console.log("You are categorized as: " + category);
}
