/**
 * LOOPS01-005: You are doing an online test and at the end are receiving certain number of
  points. Write a program, that assigns a grade (string value) based on the received points
  from the test. Use the following grade scale:
  Points from   Points to   Grade
      0         19.99       Слаб 2 (F)
      20        39.99       Слаб 2 (FX)
      40        49.99       Среден 3 (E)
      50        59.99       Среден 3 (D)
      60        69.99       Добър 4 (C)
      70        84.99       Мн. добър 5 (B)
      85        100         Отличен 6 (A)
 */

let points = 72;

let grade =
  points >= 0 && points <= 19.99 ? "Слаб 2 (F)" :
    points <= 39.99 ? "Слаб 2 (FX)" :
      points <= 49.99 ? "Среден 3 (E)" :
        points <= 59.99 ? "Среден 3 (D)" :
          points <= 69.99 ? "Добър 4 (C)" :
            points <= 84.99 ? "Мн. добър 5 (B)" :
              points <= 100 ? "Отличен 6 (A)" :
                "Invalid points";

console.log(`Points: ${points}, Grade: ${grade}`);
