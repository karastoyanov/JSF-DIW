/*
FUNCTIONS01-001: Write a function that takes two numbers as arguments and returns the 
largest of them.
*/

function getLargestNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(getLargestNum(10, 25));
console.log(getLargestNum(42, 17));