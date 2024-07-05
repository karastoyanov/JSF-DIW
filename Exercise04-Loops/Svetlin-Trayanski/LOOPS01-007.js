/* Write a program to count the number of vowels (Äoаснq) in a given string using
for loop and if-else.
*/

let text = `animal`;
let vowels = 0;
for (let i = 0; i < text.length; i++){
        let string = text[i].toLowerCase(); 
        if (string == 'a' || string == 'e' || string == 'i' || string == 'o' || string == 'u' || string == 'y'){
            vowels++;
        }
        
}
console.log(vowels);