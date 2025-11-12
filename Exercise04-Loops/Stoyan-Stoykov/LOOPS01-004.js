/**
 * LOOPS01-004: Write a program that calculates the Body Mass Index (BMI) and categorizes it.
  The formula for BMI is: weight / (height * height). Define three categories by your own
  discretion.
 */

let weight = 81.5, height = 1.79;

let BMI = weight / (height * height);

if (BMI < 18.5) {
  console.log(`BMI = ${BMI} - stickman`);
} else if (BMI >= 18.5 && BMI < 24.9) {
  console.log(`BMI = ${BMI} - meh`);
} else if (BMI >= 25 && BMI < 29.9) {
  console.log(`BMI = ${BMI} - getting fat`);
} else {
  console.log(`BMI = ${BMI} - veEery fat`);
}
