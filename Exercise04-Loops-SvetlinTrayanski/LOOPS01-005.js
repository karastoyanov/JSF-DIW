/*You are doing an online test and at the end are receiving certain number of
points. Write a program, that assigns a grade (string value) based on the received points
from the test. Use the following grade scale: */

let points = 55;

if (points >= 0 && points <= 19.99){
    console.log(`Слаб 2 (F)`)
}
if (points >= 20 && points <= 39.99){
    console.log(`Слаб 2 (FX)`)
}
if (points >= 40 && points <= 49.99){
    console.log(`Среден 3 (E)`)
}
if (points >= 50 && points <= 59.99){
    console.log(`Среден 3 (D)`)
}
if (points >= 60 && points <= 69.99){
    console.log(`Добър 4 (C)`)
}
if (points >= 70 && points <= 84.99){
    console.log(`Мн. добър 5 (B)`)
}
if (points >= 85 && points <= 100){
    console.log(`Отличен 6 (A)`)
}

