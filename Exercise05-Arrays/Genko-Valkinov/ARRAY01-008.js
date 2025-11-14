// ARRAY01-008: Write a program to create and print one-dimensional array in reverse order.

const printArrayInReverse = input => {
    for(let i = input.length - 1; i>= 0; i--){
        console.log(input[i]);
    }
}

printArrayInReverse([1, 2, 125, 63, 7, 13, 300, -20, -13]);

// As a one-liner
// 
// const printArrayInReverse = input => input.reverse().forEach(element => console.log(element));