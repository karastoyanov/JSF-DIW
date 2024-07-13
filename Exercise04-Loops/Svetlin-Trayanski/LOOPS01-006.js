/*Define a variable and initialize it with a number from the interval [0,23] (this
will be interpreted as an hour). Write an appropriate congratulations message, based on
the variable’s value.*/

let x = 21;

if (x <= 9 && x>=0){
    console.log(`The time is 0${x}:35`);
}
else if (x >= 10 && x <=23){
    console.log(`The time is ${x}:35`);
}
else { 
    console.log(`Wrong input`);
}