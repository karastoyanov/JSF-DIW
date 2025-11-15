"use strict"
/* 
 You are doing an online test and at the end are receiving certain number of 
points. Write a program, that assigns a grade (string value) based on the received points 
from the test. Use the following grade scale:
Points 
from Points to Grade
0 19.99 Слаб 2 (F)
20 39.99 Слаб 2 (FX)
40 49.99 Среден 3 (E)
50 59.99 Среден 3 (D)
60 69.99 Добър 4 (C)
70 84.99 Мн. добър 5 (B)
85 100 Отличен 6 (A)
*/

let points = 67.3;
let grade = '';

if (points >= 0 && points <= 19.99) {
   grade = 'F';
} else if (points > 19.99 && points <= 39.99) {
   grade = 'FX';
} else if (points > 39.99 && points <= 49.99) {
   grade = 'E';
} else if (points > 49.99 && points <= 59.99) {
   grade = 'D';
} else if (points > 59.99 && points <= 69.99) {
   grade = 'C';
} else if (points > 69.99 && points <= 84.99) {
   grade = 'B';
} else {
   grade = 'A';
}

console.log(grade);
