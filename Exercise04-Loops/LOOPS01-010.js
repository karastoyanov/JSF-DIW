// LOOPS01-010: Write a program to check if a given number is prime (divisible only by 1 and itself).

let givenNum = 90;

if(givenNum <= 1){
    console.log(`${givenNum} is lower than or equal to 1, not a valid input!`)
}else if(givenNum <=3){
    console.log(`${givenNum} is prime number!`)
}else if(givenNum % 2 == 0 || givenNum % 3 == 0){
    console.log(`${givenNum} is not a prime number!`)
}else{
    console.log(`${givenNum} is a prime number!`)
}
/*for (let i = 2; i < givenNum; i++) {
    if (givenNum % i == 0) {

        console.log(`the number ${givenNum} is not prime number!`);
    } else {

        console.log(`${givenNum} is prime number!`)
    }
}*/