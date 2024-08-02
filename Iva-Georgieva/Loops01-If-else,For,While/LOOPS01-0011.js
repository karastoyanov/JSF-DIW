/* LOOPS01-011: Write a program to check if a given string is a palindrome (reads the same 
    string in both directions – from the beginning to the end and vice versa – the same 
    string). */

    let palindromeCheck = 'noon';
    let word="";

    for (i=palindromeCheck.length-1; i>=0; i--) {
        word += palindromeCheck[i];
        
    } if (palindromeCheck === word) {
        console.log(`${palindromeCheck} is palindrome`);
    } else {
        console.log(`${palindromeCheck} isn't palindrome`);
    }

    

