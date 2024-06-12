//      BASICS02-014: Declare a variable. Assign one letter from the English alphabet. Print on the console the reverse – if the letter is capital, print it in lowercase; if the letter is in uppercase, print it in lowercase. Hint: Use the encoding table/codes/location in the table.

let varNew = "q";

let checkUp = varNew<='A'.charCodeAt(0) && varNew<='Z'.fromCharCode(0) ? varNew.toLowerCase() : varNew.toUpperCase();   //  representing with lower to upper, have to fix it for vise-versa.

console.log(checkUp);