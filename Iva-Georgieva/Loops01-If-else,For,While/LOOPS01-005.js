/*
You are doing an online test and at the end are receiving certain number of
points. Write a program, that assigns a grade (string value) based on the received points
from the test. Use the following grade scale:
*/



let points = 10;

if (points < 20) {
    console.log("F"); 
} else if (points >= 20 && points < 40 ) {
    console.log("Fx");
} else if (points >=40 && points <50 ){
    console.log("E");
} else if (points >=50 && points <60 ){
    console.log("D");
} else if (points >=60 && points <70 ){
    console.log("c");
} else if (points >=70 && points <85 ){
    console.log("B");
} else if (points >=85 && points <=100 ){
    console.log("E");
} else if (points >=100){
    console.log("Outside of the system");
}