// You are doing an online test and at the end are receiving certain number of 
// points. Write a program, that assigns a grade (string value) based on the received points 
// from the test. Use the following grade scale:
// Points from | Points to | Grade
//      0      | 19.99     | Слаб 2 (F)
//      20     | 39.99     | Слаб 2 (FX)
//      40     | 49.99     | Среден 3 (E)
//      50     | 59.99     | Среден 3 (D)
//      60     | 69.99     | Добър 4 (C)
//      70     | 84.99     | Мн. добър 5 (B)
//      85     | 100       | Отличен 6 (A)

let points = 85;

switch (true) {
    case points < 20:
        console.log("Your mark is F.");
        break;
    case points < 40:
        console.log("Your mark is FX.");
        break;
    case points < 50:
        console.log("Your mark is E.");
        break;
    case points < 60:
        console.log("Your mark is D");
        break;
    case points < 70:
        console.log("Your mark is C");
        break;
    case points < 85:
        console.log("Your mark is B");
        break;
    case points < 101:
        console.log("Your makr is A");
        break;
}