/*Find the maximum elements from each row in two-dimensional array.*/

const arr = [   [1,100,90], 
                [6,9,20], 
                [12,3,50]     ];

let maxElements = [];

let rows = arr.length;
let columns = arr[0].length;

    for (let row = 0; row < rows; row++){
        max = arr[row][0];

        for (let col = 1; col < columns; col++){
            if (arr[row][col] > max)
            max = arr[row][col];
        }
        maxElements.push(max);
    }
    
console.log(maxElements);
