/*  DTYPES01-017: Print the numbers from the following list: 1, 10, 38, 4, 824, 120, 999, 64 in one column, right justified. 
    Pad all the digits with zeros so that the column is right-justified, and the width is exactly eight characters. 
    Also, replace all eights with the digit nine, and all nines with the digit one.
*/

let var1 = 1;
let var2 = 10;
let var3 = 38;
let var4 = 4;
let var5 = 824;
let var6 = 120;
let var7 = 999;
let var8 = 64;

let modVar1 = (var1.toString().padStart(8,'0'));
let modVar2 = (var2.toString().padStart(8,'0'));
let modVar3 = (var3.toString().padStart(8,'0'));
let modVar4 = (var4.toString().padStart(8,'0'));
let modVar5 = (var5.toString().padStart(8,'0'));       // convert the number to string in order to use padStart method
let modVar6 = (var6.toString().padStart(8,'0'));
let modVar7 = (var7.toString().padStart(8,'0'));
let modVar8 = (var8.toString().padStart(8,'0'));

console.log(modVar1);
console.log(modVar2);
console.log(modVar3.replace('8','9'));
console.log(modVar4);
console.log(modVar5.replace('8','9'));
console.log(modVar6);
console.log(modVar7.replace(/999/g,'111'));
console.log(modVar8);