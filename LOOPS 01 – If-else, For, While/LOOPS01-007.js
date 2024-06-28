/*
LOOPS01-007: Write a program to count the number of vowels (гласни) in a given string using
for loop and if-else.
*/

let randomString = 'This is a string for test purposes';
let vowelCountForSol1 = 0;

// solution 1
for (let i = 0; i < randomString.length; i++) {
    switch (randomString[i].toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            vowelCountForSol1++;
            break;
    }
}

console.log(`There are ${vowelCountForSol1} vowels in the string "${randomString}"`);

//solution 2
let vowelCountForSol2 = 0;

for (let i = 0; i < randomString.length; i++) {
    if (randomString[i].toLowerCase() == 'a' || randomString[i].toLowerCase() == 'e' || randomString[i].toLowerCase() == 'i' || randomString[i].toLowerCase() == 'o' || randomString[i].toLowerCase() == 'u') {
        vowelCountForSol2++;
    }
}

console.log(`There are ${vowelCountForSol2} vowels in the string "${randomString}"`);