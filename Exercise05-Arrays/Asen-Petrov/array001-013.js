/*Transpose a square matrix.
// [БГ]: Транспониране на матрица:
// редовете на A стават стълбове (колони) на A
T
; 
// стълбовете (колоните) на A стават редове на A
T
*/

let numbersOne = [
    [11, 22, 33],
    [44, 55, 66],
    [77, 88, 99]
];
let numbersTwo = [];

for (let i = 0; i < numbersOne.length; i++) {
    let currentRowArray = [];
    for (let l = 0; l < numbersOne.length; l++) {
        //console.log(numbersOne[l][i])
        currentRowArray.push(numbersOne[l][i]);
        
    }
    numbersTwo.push(currentRowArray);
    //console.log(numbersTwo);
}

for (let i = 0; i < numbersOne.length; i++) {    
    for (let l = 0; l < numbersOne.length; l++) {
        console.log(numbersTwo[i][l])
        
    }
    
}
