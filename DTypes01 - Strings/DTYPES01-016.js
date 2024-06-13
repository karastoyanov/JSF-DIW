
/*
DTYPES01-016: Print the numbers from the following list: 1, 10, 38, 4, 824, 120, 999, 64 in one 
column, right justified. Pad all the digits with zeros so that the column is right-justified, 
and the width is exactly the width of the longest number written in the list. The length of 
a number is measured by the number of digits involved in its writing.
*/

let a = '1';
let b = '10';
let c = '38';
let d = '4';
let e = '824';
let f = '120';
let g = '999';
let h = '64';

let getLongestLenght = 0;

/*Compare the getLongestLenght with the lenght of each individual number. 
Every time a higher digit number is encountered it's lenght is stored in getLongestLenght.
This is annoying without loops.
*/
getLongestLenght <= a.length ? getLongestLenght = a.length : getLongestLenght;
getLongestLenght <= b.length ? getLongestLenght = b.length : getLongestLenght;
getLongestLenght <= c.length ? getLongestLenght = c.length : getLongestLenght;
getLongestLenght <= d.length ? getLongestLenght = d.length : getLongestLenght;
getLongestLenght <= e.length ? getLongestLenght = e.length : getLongestLenght;
getLongestLenght <= f.length ? getLongestLenght = f.length : getLongestLenght;
getLongestLenght <= g.length ? getLongestLenght = g.length : getLongestLenght;
getLongestLenght <= h.length ? getLongestLenght = h.length : getLongestLenght;

console.log(a.padStart(getLongestLenght, 0));
console.log(b.padStart(getLongestLenght, 0));
console.log(c.padStart(getLongestLenght, 0));
console.log(d.padStart(getLongestLenght, 0));
console.log(e.padStart(getLongestLenght, 0));
console.log(f.padStart(getLongestLenght, 0));
console.log(g.padStart(getLongestLenght, 0));
console.log(h.padStart(getLongestLenght, 0));