/*Add two N x N arrays. 
Hint: each element is the addition of the corresponding elements from both N x N 
arrays:
resultArr[0,0] = A[0][0] + B[0][0]*/

let numbersOne = [
    [11, 22, 33],
    [44, 55, 66],
    [77, 88, 99]
];

let numbersTwo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let numbers3 = [];

for (let i = 0; i < numbersOne.length; i++) {
    let currentArray = [];
    for (let l = 0; l < numbersOne.length; l++) {
        //numbers3[i][l] = numbersOne[i][l] + numbersTwo[i][l]
        currentArray.push(numbersOne[i][l] + numbersTwo[i][l]);
    }
    numbers3.push(currentArray);
}

console.log(numbers3);