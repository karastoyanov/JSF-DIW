/* LOOPS01-003: There are given two variables initialized with numbers. Write a program to
determine which one is the greater.
*/

let num1 = 133;
let num2 = 333;

if (num1 < num2)
{
    console.log(`${num1} is lower than ${num2}`);
} 
else  if (num1 > num2)
{
   console.log(`${num1} is bigger than ${num2}`)
} 
else 
{   
    console.log(`${num1} is equal to ${num2}`);
}