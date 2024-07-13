/*Define a variable and initialize it with a number from the interval [0,23] (this 
will be interpreted as an hour). Write an appropriate congratulations message, based on 
the variable’s value.*/

let currentTime = 14;

if (currentTime >=0 && currentTime < 12) {
    console.log("Good morning!");
} else if(currentTime >= 12 && currentTime <= 18){
    console.log("Good afternoon!");
} else if (currentTime > 18 && currentTime <= 23){
    console.log("Good evening!");
} else{
    console.log("Invalid time!")
}