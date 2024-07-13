/*
DTYPES01-025: Count the number of occurrences of each digit in the following text:
“19002288034”
Print in ascending order all numbers encountered in the string and the number of times 
they occur in the text, separated with a colon character “:”.
*/
let number = "19002288034";

number.match(/0/g) == null ? number : console.log (`0:${number.match(/0/g).length}`);
number.match(/1/g) == null ? number: console.log (`1:${number.match(/1/g).length}`);
number.match(/2/g) == null ? number: console.log (`2:${number.match(/2/g).length}`);
number.match(/3/g) == null ? number: console.log (`3:${number.match(/3/g).length}`);
number.match(/4/g) == null ? number: console.log (`4:${number.match(/4/g).length}`);
number.match(/5/g) == null ? number: console.log (`5:${number.match(/5/g).length}`);
number.match(/6/g) == null ? number: console.log (`6:${number.match(/6/g).length}`);
number.match(/7/g) == null ? number: console.log (`7:${number.match(/7/g).length}`);
number.match(/8/g) == null ? number: console.log (`8:${number.match(/8/g).length}`);
number.match(/9/g) == null ? number: console.log (`9:${number.match(/9/g).length}`);