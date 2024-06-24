/*      LOOPS01-005: You are doing an online test and at the end are receiving certain number of
        points. Write a program, that assigns a grade (string value) based on the received points
        from the test.
*/

let myPoints =  52.99;

switch(myPoints > 0) {
    case(myPoints > 0 && myPoints < 20):
    console.log(`You have ${myPoints} points. Your grade is Poor 2 (F)`)
    break;
    case(myPoints > 20 && myPoints < 40):
    console.log(`You have ${myPoints} points. Your grade is Poor 2 (FX)`)
    break;
    case(myPoints > 40 && myPoints < 50):
    console.log(`You have ${myPoints} points. Your grade is Average 3 (E)`)
    break;
    case(myPoints > 50 && myPoints < 60):
    console.log(`You have ${myPoints} points. Your grade is Average 3 (D)`)
    break;
    case(myPoints > 60 && myPoints < 70):
    console.log(`You have ${myPoints} points. Your grade is Good 4 (C)`)
    break;
    case(myPoints > 70 && myPoints < 85):
    console.log(`You have ${myPoints} points. Your grade is Very good 5 (B)`)
    break;
    case(myPoints > 85 && myPoints < 100):
    console.log(`You have ${myPoints} points. Your grade is Excellent 6 (A)`)
}
