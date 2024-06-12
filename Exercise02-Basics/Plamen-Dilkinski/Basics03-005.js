//      BASICS03-005: Declare three variables and assign them with three randomly selected integer numbers. Print on the console those two of them, which have the biggest sum. Hint: Use the ternary operators.

let var1 = 24;
let var2 = 12;
let var3 = 15;

sum1 = var1 + var2;
sum2 = var1 + var3;
sum3 = var2 + var3; 

let bigSum = (sum1 > sum2) ? (sum1 > sum3 ? sum1 : sum3) : (sum2 > sum3 ? sum2 : sum3);     //      Elevating sum against the other two and comparing the result

console.log(`The biggest sum is ${bigSum}`);
