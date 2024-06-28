let string = "The number 28469 is not so big";

let numbers = string.substring(11,16);
numbers[0] % 2 == 0 ? console.log(numbers[0]):''
numbers[1] % 2 == 0 ? console.log(numbers[1]):''
numbers[2] % 2 == 0 ? console.log(numbers[2]):''
numbers[3] % 2 == 0 ? console.log(numbers[3]):''
numbers[4] % 2 == 0 ? console.log(numbers[4]):''
//I do not like the use of "?". I would do it with IF.
