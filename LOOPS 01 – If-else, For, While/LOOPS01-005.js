/*
LOOPS01-005: You are doing an online test and at the end are receiving certain number of
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


let points = 0;


if (points > 0 && points < 19.99) {
    console.log(`F`);
} else if (points >= 20 && points < 39.99) {
    console.log(`FX`);
} else if (points >= 40 && points < 49.99) {
    console.log(`E`);
} else if (points >= 50 && points < 59.99) {
    console.log(`D`);
} else if (points >= 60 && points < 69.99) {
    console.log(`C`);
} else if (points >= 70 && points < 84.99) {
    console.log(`B`);
} else if (points >= 85 && points <= 100) {
    console.log(`A`);
} else {
    console.log(`${points} is not a valid number of points`);
};