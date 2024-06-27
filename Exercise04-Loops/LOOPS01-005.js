/* You are doing an online test and at the end are receiving certain number of
points. Write a program, that assigns a grade (string value) based on the received points
from the test. Use the following grade scale:
Points from Points to Grade
0 19.99 Слаб 2 (F)
20 39.99 Слаб 2 (FX)
40 49.99 Среден 3 (E)
50 59.99 Среден 3 (D)
60 69.99 Добър 4 (C)
70 84.99 Мн. добър 5 (B)
85 100 Отличен 6 (A) */

let points = 92; 
let grade;

if (points >= 0 && points <= 19.99) {
    grade = "Слаб 2 (F)";
} else if (points >= 20 && points <= 39.99) {
    grade = "Слаб 2 (FX)";
} else if (points >= 40 && points <= 49.99) {
    grade = "Среден 3 (E)";
} else if (points >= 50 && points <= 59.99) {
    grade = "Среден 3 (D)";
} else if (points >= 60 && points <= 69.99) {
    grade = "Добър 4 (C)";
} else if (points >= 70 && points <= 84.99) {
    grade = "Мн. добър 5 (B)";
} else if (points >= 85 && points <= 100) {
    grade = "Отличен 6 (A)";
} else {
    grade = "Invalid points";
}

console.log("Points: " + points);
console.log("Grade: " + grade);