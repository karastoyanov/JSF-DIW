/* LOOPS01-007: Write a program to count the number of vowels (гласни) in a given string using 
for loop and if-else. */

let sentence = 'Once upon a time';

let p;
let vowelsNumber = 0;
let x=0;


for (i = 0; i < sentence.length; i++) {
        p = sentence[i];
          
     if (p.match(/o/i)) {
        console.log(p)
        vowelsNumber++;
        
    } else if (p.match(/a/i)) {
        console.log(p) 
        vowelsNumber++;

    } else if (p.match(/u/i)) {
        console.log(p) 
        vowelsNumber++;

    } else if (p.match(/e/i)) {
        console.log(p)
        vowelsNumber++;  

    } else if (p.match(/y/i)) {
        console.log(p)
        vowelsNumber++;
        
    }
    
} 
   
console.log(vowelsNumber);








