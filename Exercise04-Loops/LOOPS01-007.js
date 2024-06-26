//  LOOPS01-007: Write a program to count the number of vowels in a given string using for loop and if-else.

let givenString = 'some string to test with now';
let i;
for (i = 0; i <= givenString.length; i++) {

    if (givenString[i] == "a" || givenString[i] == 'e' || givenString[i] == 'o' || givenString[i] == 'u') {

        console.log(givenString[i]);    
 }} 

//  still not capturing the capital letter and not counting the amount of occurance per given vowel.