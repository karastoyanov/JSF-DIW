/*
DTYPES01-024: Count the number of occurrences of each digit in the following text:
“193817588”
Print in ascending order all numbers from 0 to 9 and the number of times they occur in 
the text, separated with a comma.
*/
let number = "193817588";

number.match(/0/g) == null ? console.log (`0, 0` ): console.log (`0, ${number.match(/0/g).length}`);
number.match(/1/g) == null ? console.log (`1, 0`) : console.log (`1, ${number.match(/1/g).length}`);
number.match(/2/g) == null ? console.log (`2, 0`) : console.log (`2, ${number.match(/2/g).length}`);
number.match(/3/g) == null ? console.log (`3, 0`) : console.log (`3, ${number.match(/3/g).length}`);
number.match(/4/g) == null ? console.log (`4, 0`) : console.log (`4, ${number.match(/4/g).length}`);
number.match(/5/g) == null ? console.log (`5, 0`) : console.log (`5, ${number.match(/5/g).length}`);
number.match(/6/g) == null ? console.log (`6, 0`) : console.log (`6, ${number.match(/6/g).length}`);
number.match(/7/g) == null ? console.log (`7, 0`) : console.log (`7, ${number.match(/7/g).length}`);
number.match(/8/g) == null ? console.log (`8, 0`) : console.log (`8, ${number.match(/8/g).length}`);
number.match(/9/g) == null ? console.log (`9, 0`) : console.log (`9, ${number.match(/9/g).length}`);
