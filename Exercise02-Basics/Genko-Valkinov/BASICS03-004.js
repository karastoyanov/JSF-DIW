// BASICS03-004: Define a constant. Check and print on the console if the constant is positive, 
// negative or zero. Hint: Use ternary operators. How many operators do you need?

const firstNumber = -17;

console.log(firstNumber < 0 ? `Number ${firstNumber} is negative.` : (firstNumber > 0 ? `Number ${firstNumber} is positive.` : `Number ${firstNumber} is zero`)); 

// 4 operators (?, ?, <, >)