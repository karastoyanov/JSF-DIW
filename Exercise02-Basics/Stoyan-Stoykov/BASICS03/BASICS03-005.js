/**
 * BASICS03-005: Declare three variables and assign them with three randomly selected integer 
    numbers. Print on the console those two of them, which have the biggest sum. Hint: Use 
    the ternary operators.
 */

let x = 3, y = 7, z = 5;
let [s1, s2, s3] = [x + y, y + z, x + z];
console.log("Biggest sum pair:", s1 > s2 && s1 > s3 ? [x, y] : s2 > s3 ? [y, z] : [x, z]);
