/*  LOOPS01-004: Write a program that calculates the Body Mass Index (BMI) and categorizes it.
    The formula for BMI is: weight / (height * height). Define three categories by your own
    discretion. */

let Weight = 90; // weight is in kilograms
let Height = 1.87; // height is in meters

let BMI = Weight / (Height * Height);   

if(BMI < 18.5)
    {
    console.log(`The BMI with value ${BMI} is within the underweight range`);
    } 
else if( 18.5 <= BMI && BMI <= 24.9)                                
    {
        console.log(`The BMI with value ${BMI} is within the healthy range`);
    }
else
    {
        console.log(`The BMI with value ${BMI} is within the overweight range`);
    }
