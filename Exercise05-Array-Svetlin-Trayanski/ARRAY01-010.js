/*Find the minimum elements from each column in two-dimensional array.*/

const arr = [   [1,100,90], 
                [6,9,20], 
                [12,3,50]     ];

let minElements = [];

let rows = arr.length;
let columns = arr[0].length;

    for (let col = 0; col < columns; col++){
        min = arr[0][col];

        for (let row = 1; row < rows ; row++){
            if (arr[row][col] < min) {
                min = arr[row][col];
            }
        }
        minElements.push(min);
    }
console.log(minElements);
