/*  DTYPES01-016: Print the numbers from the following list: 1, 10, 38, 4, 824, 120, 999, 64 in one column, right justified. 
    Pad all the digits with zeros so that the column is right-justified, and the width is exactly the width of the longest number written in the list. 
    The length of a number is measured by the number of digits involved in its writing.*/

let var1 = 1;
let var2 = 10;
let var3 = 38;
let var4 = 4;
let var5 = 824;
let var6 = 120;
let var7 = 999;
let var8 = 64;

console.log(var1.toString().padStart(3,'0'));
console.log(var2.toString().padStart(3,'0'));
console.log(var3.toString().padStart(3,'0'));
console.log(var4.toString().padStart(3,'0'));
console.log(var5.toString().padStart(3,'0'));       // convert the number to string in order to use padStart method
console.log(var6.toString().padStart(3,'0'));
console.log(var7.toString().padStart(3,'0'));
console.log(var8.toString().padStart(3,'0'));