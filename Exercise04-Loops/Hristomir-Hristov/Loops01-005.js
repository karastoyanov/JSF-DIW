/*
You are doing an online test and at the end are receiving certain number of
points. Write a program, that assigns a grade (string value) based on the received points
from the test. Use the following grade scale:
Points from Points to Grade
0 19.99 Слаб 2 (F)
20 39.99 Слаб 2 (FX)
40 49.99 Среден 3 (E)
50 59.99 Среден 3 (D)
60 69.99 Добър 4 (C)
70 84.99 Мн. добър 5 (B)
85 100 Отличен 6 (A)
*/

let points = 86.55;

if (points < 20) {
    console.log(`Слаб 2 (F)`);
} else if (points >= 20 && points < 40) {
    console.log(`Слаб 2 (FX)`);
} else if (points >= 40 && points < 50) {
    console.log(`Среден 3 (E)`);
} else if (points >= 50 && points < 60) {
    console.log(`Среден 3 (D)`);
} else if (points >= 60 && points < 70) {
    console.log(`Добър 4 (C)`)
} else if (points >= 70 && points < 85) {
    console.log(`Мн. добър 5 (B)`);
} else {
    console.log(`Отличен 6 (A)`);
}