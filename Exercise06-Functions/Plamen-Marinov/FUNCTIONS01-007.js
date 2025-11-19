/*
FUNCTIONS01-007: Write a function that takes three numbers as arguments and returns the 
biggest sum of two of the numbers.
*/

function findLargest(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

const largestNumber = findLargest(100, -101, 98);

console.log("Largest number is:", largestNumber);



/*
function findLargestMath(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

const largestNumberMath = findLargestMath(100, -101, 98);

console.log("Largest number:", largestNumberMath);
*/